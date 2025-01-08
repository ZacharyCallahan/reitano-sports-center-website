"use server";

import Stripe from 'stripe';
import prisma from '@/lib/prisma'; // adjust path as needed
import bcrypt from 'bcrypt';
import sgMail from '@sendgrid/mail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/**
 * 1. SERVER ACTION: Fetch available sessions
 */
export async function getAvailableSessions() {
    const sessions = await prisma.trainingSession.findMany({
        where: { isBooked: false },
        include: {
            trainer: true,
        },
        orderBy: {
            date: 'asc',
        },
    });
    return sessions;
}

/**
 * 2. SERVER ACTION: Create a booking & redirect to Stripe
 * 
 * createBookingAndPay
 * - Creates a Booking record in DB (optional step).
 * - Generates a Stripe Checkout Session as a "direct charge" on Jim's account.
 * - 3% automatically goes to Zach’s platform; 97% to Jim.
 */
export async function createBookingAndPay({ sessionId, email, name }) {
    // 1. Fetch the training session from the database
    const sessionData = await prisma.trainingSession.findUnique({
        where: { id: sessionId },
    });
    if (!sessionData) {
        throw new Error("Training session not found.");
    }

    // 2. Create a booking record (optional - for your own tracking)
    const booking = await prisma.booking.create({
        data: {
            sessionId: sessionData.id,
            email,
            name,
            pricePaid: sessionData.price,
        },
    });

    // 3. Calculate amounts in cents
    const totalAmount = Math.round(sessionData.price * 100); // e.g., $50 => 5000 cents
    const application_fee_amount = Math.round(totalAmount * 0.03);      // 3% => 150 cents (=$1.50)

    const stripeAccount = process.env.OWNER_STRIPE_ACCOUNT_ID;

    // 4. Create a direct charge Checkout Session on Jim's connected account
    const checkoutSession = await stripe.checkout.sessions.create(
        {
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Training with ${sessionData.id}`,
                        },
                        unit_amount: totalAmount,
                    },
                    quantity: 1,
                },
            ],
            payment_intent_data: {
                // 3% fee to Zach
                application_fee_amount,
            },
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/training/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/training/cancel`,
        },
        {
            // "stripeAccount" indicates the charge is on Jim's connected account
            stripeAccount,
        }
    );

    // Return the Checkout Session URL to redirect the user
    return checkoutSession.url;
}


/**
 * 3. SERVER ACTION: Send booking confirmation email (using SendGrid)
 *    - Called by your Stripe webhook or after payment is confirmed.
 */
export async function sendBookingConfirmationEmail(bookingId) {
    const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
            session: {
                include: {
                    trainer: true,
                },
            },
        },
    });

    if (!booking) return;

    const sessionDate = booking.session.date.toLocaleString();
    const coachName = booking.session.trainer.name;
    const recipientEmail = booking.email;

    const message = {
        to: recipientEmail,
        from: process.env.SENDGRID_FROM, // e.g. "info@yourdomain.com"
        subject: 'Training Session Confirmation',
        text: `
      Hello ${booking.name || ''},

      Thank you for booking a training session with ${coachName}.
      Here are the details:
      - Date & Time: ${sessionDate}
      - Location: Reitano Sports Center Elite (replace with actual address)

      We look forward to seeing you!
    `,
        html: `
      <p>Hello ${booking.name || ''},</p>
      <p>
        Thank you for booking a training session with <strong>${coachName}</strong>.
      </p>
      <ul>
        <li><strong>Date & Time:</strong> ${sessionDate}</li>
        <li><strong>Location:</strong> Reitano Sports Center Elite (replace with actual address)</li>
      </ul>
      <p>We look forward to seeing you!</p>
    `,
    };

    try {
        await sgMail.send(message);
    } catch (error) {
        console.error('SendGrid Error:', error);
    }
}
