// components/TopTours.jsx
import React from 'react'
import { motion } from 'framer-motion'
import iter from "../assests/iter.png"
const tours = [
  {
    id: 1,
    title: 'Enjoy the Beauty of Maldives',
    location: 'Maldives',
    imageUrl: iter,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Experience the natural beauty of Bali',
    location: 'Bali',
    imageUrl: iter,
    rating: 4.0,
  },
  {
    id: 3,
    title: 'Vacation to the Seychelles',
    location: 'Seychelles',
    imageUrl:iter,
    rating: 5.0,
  },
]

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.452a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.452a1 1 0 00-1.175 0l-3.37 2.452c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.365-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-grad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.452a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.452a1 1 0 00-1.175 0l-3.37 2.452c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.365-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z"
          />
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.452a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.452a1 1 0 00-1.175 0l-3.37 2.452c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.365-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
          </svg>
        ))}
    </>
  )
}

export default function TopTours() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-blue-600 font-semibold mb-2">TOP DESTINATION</h3>
        <h2 className="text-3xl font-bold mb-8">Explore Top Tours Packages</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-500 mb-4">{tour.location}</p>
                <div className="flex">{renderStars(tour.rating)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
