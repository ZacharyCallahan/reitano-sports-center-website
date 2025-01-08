// app/(site)/training/page.js

import prisma from '@/lib/prisma';
import BookingForm from './components/BookingForm';

export default async function TrainingPage() {
    // 1. Fetch all trainers (e.g., Seth, James)
    const trainers = await prisma.trainer.findMany({
        orderBy: { name: 'asc' },
    });

    // 2. Fetch all sessions (with trainer info) that are not booked
    //    In a real app, you might only fetch future sessions, etc.
    const sessions = await prisma.trainingSession.findMany({
        where: { isBooked: false },
        include: { trainer: true },
        orderBy: { date: 'asc' },
    });

    return (
        <main className="mx-auto max-w-3xl p-4 space-y-6">
            <h1 className="text-2xl font-bold mb-4">Book a Training Session</h1>
            <BookingForm trainers={trainers} sessions={sessions} />
        </main>
    );
}
