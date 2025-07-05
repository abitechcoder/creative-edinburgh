"use client";

import { EventSchema } from "@/lib/formValidationSchemas";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Event } from "@prisma/client";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY

const EventCalendar = ({ events }: { events: Event[] }) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Link className="text-xs text-gray-400" href={`/app/events`}>
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event: any) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-SkyBlue even:border-t-PurpleDeep"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
