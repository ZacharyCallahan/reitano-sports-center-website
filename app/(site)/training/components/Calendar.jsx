// app/(site)/training/components/Calendar.jsx

"use client";

import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Calendar({ availableDates, selectedDate, onChange }) {
    const [value, setValue] = useState(selectedDate || null);

    useEffect(() => {
        // Keep state in sync if parent changes selectedDate
        setValue(selectedDate);
    }, [selectedDate]);

    // Convert availableDates (array of JS Dates) into a Set of "yyyy-mm-dd" for quick lookup
    const availableSet = new Set(
        availableDates.map((d) => d.toISOString().split('T')[0])
    );

    // Function to check if a date is disabled
    const isTileDisabled = ({ date, view }) => {
        if (view === 'month') {
            const dayStr = date.toISOString().split('T')[0];
            return !availableSet.has(dayStr); // disable days not in availableDates
        }
        return false;
    };

    // Optional styling or highlighting for days that are available
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dayStr = date.toISOString().split('T')[0];
            if (availableSet.has(dayStr)) {
                return 'bg-blue-50 text-blue-600 font-semibold rounded-md';
            }
        }
        return null;
    };

    // Handle date change
    const handleChange = (date) => {
        setValue(date);
        onChange?.(date);
    };

    return (
        <motion.div
            className="my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ReactCalendar
                onChange={handleChange}
                value={value}
                tileDisabled={isTileDisabled}
                tileClassName={tileClassName}
            />
        </motion.div>
    );
}
