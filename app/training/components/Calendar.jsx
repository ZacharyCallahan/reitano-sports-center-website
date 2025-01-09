"use client";

import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarOverrides.css"; // Our custom overrides
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Calendar({ availableDates, selectedDate, onChange }) {
    const [value, setValue] = useState(selectedDate || null);

    useEffect(() => {
        setValue(selectedDate);
    }, [selectedDate]);

    // Mark available dates in a Set
    const availableSet = new Set(
        availableDates.map((d) => d.toISOString().split("T")[0])
    );

    // Disable days not in availableDates
    const isTileDisabled = ({ date, view }) => {
        if (view === "month") {
            const dayStr = date.toISOString().split("T")[0];
            return !availableSet.has(dayStr);
        }
        return false;
    };

    // Optionally highlight available days
    const tileClassName = ({ date, view }) => {
        if (view === "month") {
            const dayStr = date.toISOString().split("T")[0];
            if (availableSet.has(dayStr)) {
                return "font-semibold text-blue-700"; // Tailwind classes
            }
        }
        return null;
    };

    const handleChange = (date) => {
        setValue(date);
        onChange?.(date);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ReactCalendar
                onChange={handleChange}
                value={value}
                tileDisabled={isTileDisabled}
                tileClassName={tileClassName}
                next2Label={null}
                prev2Label={null}
                nextLabel={<FiChevronRight size={20} />}
                prevLabel={<FiChevronLeft size={20} />}
            />
        </motion.div>
    );
}
