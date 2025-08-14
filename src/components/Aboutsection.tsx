// components/AboutSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import iter from "../assests/iter.png"

const stats = [
  { id: 1, end: 5, suffix: '+', label: 'Years Experience' },
  { id: 2, end: 4, suffix: '+', label: 'Island Destination' },
  { id: 3, end: 20, suffix: 'K', label: 'Happy Customer' },
]

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* LEFT: overlapping images */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px]">
          
          {/* big background image */}
          <motion.img
            src={iter}
            alt="Family on beach"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />

          {/* small foreground image */}
          <motion.img
            src={iter}
            alt="Person on laptop"
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute hidden md:flex bottom-[-10vh] right-0 w-2/5 lg:w-[1.8/3] object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* RIGHT: text + stats */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-blue-600 font-semibold uppercase mb-2">About Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Doozy Trips—Trusted for urgent travel, across Canada and beyond.
          </h2> 
          <p className="text-gray-600 mb-8 leading-relaxed">
          Your “now-must-travel” is our moment to shine. We chase the best last-minute rates so you don’t have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {stats.map(({ id, end, suffix, label }) => (
              <motion.div
                key={id}
                className="flex-1 bg-gray-100 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <CountUp
                  start={0}
                  end={end}
                  suffix={suffix}
                  duration={5}
                  className="text-3xl sm:text-4xl font-extrabold text-blue-600"
                />
                <p className="mt-1 text-gray-500">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
