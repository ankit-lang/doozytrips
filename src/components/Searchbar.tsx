import { useState } from 'react'

const DESTINATIONS = [
  'Maldives',
  'Bali',
  'Santorini',
  'Iceland',
  'New Zealand',
]

const TOUR_TYPES = [
  'Adventure Tours',
  'City Breaks',
  'Cultural Trips',
  'Beach Holidays',
]

export function SearchBar({ onNext }) {
  const [destination, setDestination] = useState(DESTINATIONS[0])
  const [date, setDate] = useState('')
  const [tourType, setTourType] = useState(TOUR_TYPES[0])

  const handleNext = () => {
    // You can replace this with navigation or any handler
    onNext?.({ destination, date, tourType })
  }

  return (
    <div className="flex flex-wrap gap-4 items-center relative z-[1000] bg-white/30  text-gray-600  p-4 rounded-md shadow-md">
      {/* Destination */}
      <div className="flex-1 min-w-[12rem]">
        <label className="sr-only" htmlFor="destination">Destination</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          {DESTINATIONS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      <div className="flex-1 min-w-[12rem]">
        <label className="sr-only" htmlFor="travel-date">When?</label>
        <input
          id="travel-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="When?"
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tour Type */}
      <div className="flex-1 min-w-[12rem]">
        <label className="sr-only" htmlFor="tour-type">Tour Type</label>
        <select
          id="tour-type"
          value={tourType}
          onChange={(e) => setTourType(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          {TOUR_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="h-12 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  )
}
