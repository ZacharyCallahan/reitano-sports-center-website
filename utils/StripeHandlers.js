import  prisma  from '@/lib/prisma';
import { sendBookingConfirmationEmail } from '@/app/training/actions';

export async function handlePaymentIntentSucceeded(paymentIntent) {
    // The bookingId is stored in paymentIntent.metadata when we created the Checkout Session
    const { bookingId } = paymentIntent.metadata || {};

    if (!bookingId) return;

    // Mark booking as paid
    await prisma.booking.update({
        where: { id: bookingId },
        data: {
            paid: true,
            // Optionally update the trainingSession to mark it as booked
            session: {
                update: {
                    isBooked: true,
                },
            },
        },
    });

    // Send a confirmation email
    await sendBookingConfirmationEmail(bookingId);
}

// For completeness (if you need them):
export async function handleInvoicePaymentSucceeded(invoice) {
    // ...
}

export async function handleInvoicePaymentFailed(invoice) {
    // ...
}

export async function handleSubscriptionDeleted(subscription) {
    // ...
}

export async function handleSubscriptionUpdated(subscription) {
    // ...
}
