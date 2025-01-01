
export async function handlePaymentIntentSucceeded(paymentIntent) {
    // one time payment
    const data = paymentIntent.metadata;
    
}

export async function handleInvoicePaymentSucceeded(invoice) {
    // subscription payment
}

export async function handleInvoicePaymentFailed(invoice) {
    // subscription payment failed
}

export async function handleSubscriptionDeleted(subscription) {
    // subscription canceled
}