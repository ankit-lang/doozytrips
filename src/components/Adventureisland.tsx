// components/AdventureActivity.jsx
import React from 'react'
import { motion } from 'framer-motion'
import iter from "../assests/iter.png"
import adven from "../assests/adven.png"
import { FaPersonSwimming, FaFish, FaWater, FaSailboat, FaSpa, FaUmbrellaBeach } from "react-icons/fa6";

const activities = [
  { label: "Sea Diving", icon: <FaPersonSwimming /> },
  { label: "Water Sports", icon: <FaSailboat /> },
  { label: "Spa and Relaxation", icon: <FaSpa /> },
  { label: "Islands Excursion", icon: <FaUmbrellaBeach /> },
];
export default function AdventureActivity() {
  return (
      <>

      {/* <div class="containerd absolute "></div> */}
    <section className="relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-10 "
        style={{ backgroundImage: iter }}
      />
      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-blue-900/60" /> */}

      {/* Content container */}
      <div className="relative z-10  mb-20 md:mb-10 mx-auto py-20 px-4 text-center text-white bg-sky-700">
        <p className="uppercase text-sm tracking-wider mb-2">Doozytrips</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Adventure &amp; Activity</h2>

        <div className="flex flex-wrap  justify-center items-center gap-12">
          {activities.map((act, i) => (
            <motion.div
              key={act.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
                {/* <img src={adven} alt={act.name} className="w-8 h-8" /> */}
                  <div className="text-4xl text-blue-500">{act.icon}</div>
              </div>
              <span className="text-base font-medium">{act.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
