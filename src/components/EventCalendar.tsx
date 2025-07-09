"use client";

import { Event } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({ eventDates }: { eventDates: Event[] }) => {
  const [value, onChange] = useState<Value>(new Date());
  const router = useRouter();

  const parsedDates = useMemo(
    () => eventDates.map((e) => new Date(e.startTime)),
    [eventDates]
  );

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`);
    }
  }, [value, router]);

  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileClassName={({ date }) => {
        const hasEvent = parsedDates.some(
          (d) =>
            d.getFullYear() === date.getFullYear() &&
            d.getMonth() === date.getMonth() &&
            d.getDate() === date.getDate()
        );
        return hasEvent ? "highlight" : "";
      }}
    />
  );
};

export default EventCalendar;
