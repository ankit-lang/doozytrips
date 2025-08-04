// components/Testimonials.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: `We had a GREAT and MEANINGFUL time on our journey
and it was a highlight to meet you. You are very concerned
and you take all things seriously.`,
    name: 'Harjit Singh',
    location: 'Mumbai',
  },
  {
    id: 2,
    text: `Absolutely loved the itinerary and the care 
provided throughout our trip. Ishull DMC made
our vacation unforgettable!`,
    name: 'Priya Sharma',
    location: 'Delhi',
  },
  {
    id: 3,
    text: `From the moment we landed, everything was
seamless. The tours, the guides, the hotels—
all top notch. Highly recommend!`,
    name: 'Rohan Mehta',
    location: 'Bengaluru',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const handleContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <p className="text-blue-600 uppercase font-semibold mb-2">
            What They Say
          </p>
          <h2 className="text-4xl font-bold mb-6">
            What Our Customers Say About Us
          </h2>
          <button
            onClick={handleContact}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4 w-10 h-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-7 7-7-7"
                /> */}
              </svg>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {testimonials[index].text}
              </p>
              <h3 className="text-xl font-semibold">
                {testimonials[index].name}
              </h3>
              <p className="text-blue-600">
                {testimonials[index].location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
