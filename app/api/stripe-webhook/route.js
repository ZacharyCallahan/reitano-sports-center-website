// app/api/stripe-webhook/route.js

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import {
    handleSubscriptionUpdated,
    handlePaymentIntentSucceeded,
    handleInvoicePaymentSucceeded,
    handleInvoicePaymentFailed,
    handleSubscriptionDeleted,
} from '@/utils/StripeHandlers';

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers.get('stripe-signature');
    const rawBody = await request.text();

    let event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return new NextResponse('Webhook signature verification failed', { status: 400 });
    }

    // Handle different event types
    switch (event.type) {
        case 'payment_intent.succeeded':
            // one time payment
            await handlePaymentIntentSucceeded(event.data.object);
            break;

        case 'invoice.payment_succeeded':
            // subscription payment
            await handleInvoicePaymentSucceeded(event.data.object);
            break;

        case 'invoice.payment_failed':
            // subscription payment failed
            await handleInvoicePaymentFailed(event.data.object);
            break;

        case 'customer.subscription.deleted':
            // subscription canceled
            await handleSubscriptionDeleted(event.data.object);
            break;

        case 'customer.subscription.updated':
            // subscription updated
            await handleSubscriptionUpdated(event.data.object);
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return new NextResponse('Success', { status: 200 });
}