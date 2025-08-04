// components/AdventureActivity.jsx
import React from 'react'
import { motion } from 'framer-motion'
import iter from "../assests/iter.png"
import adven from "../assests/adven.png"
const activities = [
  { name: 'Sea Diving', icon: '/icons/sea-diving.svg' },
  { name: 'Water Sports', icon: '/icons/water-sports.svg' },
  { name: 'Spa and Relaxation', icon: '/icons/spa.svg' },
  { name: 'Islands Excursion', icon: '/icons/excursion.svg' },
  { name: 'Dolphin Watching', icon: '/icons/dolphin.svg' },
]

export default function AdventureActivity() {
  return (
      <>

      <div class="containerd absolute "></div>
    <section className="relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-10 "
        style={{ backgroundImage: iter }}
      />
      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-blue-900/60" /> */}

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 text-center text-primary">
        <p className="uppercase text-sm tracking-wider mb-2">Ishull DMC</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Adventure &amp; Activity</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {activities.map((act, i) => (
            <motion.div
              key={act.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <img src={adven} alt={act.name} className="w-8 h-8" />
              </div>
              <span className="text-base font-medium">{act.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
