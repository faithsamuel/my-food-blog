"use client"
import React from 'react'
import { Calendar } from "@/components/ui/calendar"

export default function RecipeScheduler() {
    const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mt-4 ml-4">
            Recipe Scheduler 
            </h1>

            <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />

    </div>
  )
}
