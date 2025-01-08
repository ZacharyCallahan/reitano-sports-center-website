// app/(site)/training/components/BookingForm.jsx

"use client";

import { useState, useMemo, useTransition } from 'react';
import Calendar from './Calendar';
import { createBookingAndPay } from '../actions';

export default function BookingForm({ trainers, sessions }) {
    const [trainerId, setTrainerId] = useState(trainers[0]?.id ?? '');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeId, setSelectedTimeId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isPending, startTransition] = useTransition();

    // Filter sessions by selected trainer
    const filteredSessions = useMemo(() => {
        if (!trainerId) return [];
        return sessions.filter((s) => s.trainerId === trainerId);
    }, [trainerId, sessions]);

    // 1. Group sessions by Date
    //    e.g. { "2023-12-01": [ {id, date, price, ...}, ... ] }
    const sessionsByDate = useMemo(() => {
        const map = {};
        filteredSessions.forEach((session) => {
            const day = session.date.toISOString().split('T')[0]; // "YYYY-MM-DD"
            if (!map[day]) map[day] = [];
            map[day].push(session);
        });
        return map;
    }, [filteredSessions]);

    // 2. Extract all distinct dates that have sessions
    //    In Date objects for react-calendar
    const allAvailableDates = useMemo(() => {
        return Object.keys(sessionsByDate).map((dayStr) => new Date(dayStr));
    }, [sessionsByDate]);

    // 3. Time slots for the currently selected date
    const timeSlots = useMemo(() => {
        if (!selectedDate) return [];
        const dayStr = selectedDate.toISOString().split('T')[0];
        return sessionsByDate[dayStr] ?? [];
    }, [selectedDate, sessionsByDate]);

    // Handle form submission -> calls server action
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedTimeId) {
            alert('Please select a time slot.');
            return;
        }
        startTransition(async () => {
            try {
                const checkoutUrl = await createBookingAndPay({
                    sessionId: selectedTimeId,
                    email,
                    name,
                });
                if (checkoutUrl) {
                    window.location.href = checkoutUrl;
                }
            } catch (error) {
                console.error(error);
                alert('Error creating booking. Please try again.');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Select Trainer & Time</h2>

            {/* Trainer Selection */}
            <div>
                <label className="block font-medium mb-1">Trainer:</label>
                <select
                    className="border rounded p-1"
                    value={trainerId}
                    onChange={(e) => {
                        setTrainerId(e.target.value);
                        setSelectedDate(null);
                        setSelectedTimeId('');
                    }}
                >
                    {trainers.map((t) => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Calendar Component */}
            <Calendar
                availableDates={allAvailableDates}
                selectedDate={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                    setSelectedTimeId(''); // reset time if date changes
                }}
            />

            {/* Time Slots List */}
            {selectedDate && (
                <div>
                    <label className="block font-medium mb-1">
                        Available Times for {selectedDate.toDateString()}:
                    </label>
                    <div className="space-y-2">
                        {timeSlots.length === 0 && (
                            <p className="text-sm text-gray-500">No sessions available.</p>
                        )}
                        {timeSlots.map((slot) => {
                            const slotTime = new Date(slot.date).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            });
                            return (
                                <div key={slot.id} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id={slot.id}
                                        name="timeSlot"
                                        value={slot.id}
                                        checked={selectedTimeId === slot.id}
                                        onChange={() => setSelectedTimeId(slot.id)}
                                    />
                                    <label htmlFor={slot.id}>
                                        {slotTime} - ${slot.price}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* User Info */}
            <div>
                <label className="block font-medium mb-1">Your Name:</label>
                <input
                    type="text"
                    className="w-full border rounded p-2"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Email Address:</label>
                <input
                    type="email"
                    className="w-full border rounded p-2"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isPending}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {isPending ? 'Processing...' : 'Book & Pay'}
            </button>
        </form>
    );
}
