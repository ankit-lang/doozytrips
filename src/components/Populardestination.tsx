// components/PopularDestinations.jsx
import React from 'react'
import { motion } from 'framer-motion'
import iter from "../assests/iter.png"
// Data
const popular = {
  hero: {
    name: 'Maldives',
    imgSrc: iter,
  },
  others: [
    { name: 'Bali', imgSrc: iter},
    { name: 'Sri Lanka', imgSrc: iter },
    { name: 'Seychelles', imgSrc: iter },
  ],
}

// Variants for staggering
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

// Card component
function DestinationCard({ name, imgSrc, className = '' }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative  overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <img src={imgSrc} alt={name} className="w-full  " />
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
        {name}
      </h3>
    </motion.div>
  )
}

// Main component
export default function PopularDestinations() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Text + Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-start gap-8"
        >
          {/* Text */}
          <div className="lg:w-1/3">
            <p className="text-blue-600 font-semibold uppercase mb-2">
              Choose Your Place
            </p>
            <h2 className="text-4xl font-bold mb-6">Popular Destinations</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              View All
            </button>
          </div>

          {/* Hero */}
          <div className="lg:w-2/3">
            <DestinationCard
              name={popular.hero.name}
              imgSrc={popular.hero.imgSrc}
              className="h-64 lg:h-80"
            />
          </div>
        </motion.div>

        {/* Row 2: Grid of 3 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {popular.others.map((dest) => (
            <DestinationCard
              key={dest.name}
              name={dest.name}
              imgSrc={dest.imgSrc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
