// components/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'
import iter from "/banner/4.png"
import { Link } from 'react-router-dom';
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/aboutus' },
  { name: 'Contact us', path: '/support' },
   { name: 'Flights', path: '/flights' },
    { name: 'Vacations', path: '/vacations' },
     { name: 'Notes', path: '/notes' },
     { name: 'Deals', path: '/deals' },
]
const destinations = [
  { name: 'Maldives', image: '/banner/21.png' },
  { name: 'Bali', image: '/banner/22.png' },
  { name: 'Sri Lanka', image: '/banner/23.png' },
  { name: 'Seychelles', image: '/banner/24.png' },
]
import logo from '../assests/logo.png'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import '../index.css'
import { IoLocationSharp } from 'react-icons/io5';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { IoMdMailUnread } from 'react-icons/io';

const social = [
  { name: 'Facebook', Icon: FaFacebookF, url: 'https://facebook.com' },
  { name: 'Instagram', Icon: FaInstagram, url: 'https://instagram.com' },
  { name: 'YouTube', Icon: FaYoutube, url: 'https://youtube.com' },
]


const columnVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  return (
    <>
{/* <div class="containere absolute"/> */}

    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
      className="bg-[#03153B] relative z-1  text-gray-300"
    >
      {/* Top content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About + Logo */}
        <motion.div variants={columnVariants}>
          <img src={logo} alt="doozytrips" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
          
          </p>
          <div className="flex space-x-4 mt-6">
           {social.map(({ name, Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-600 transition"
        >
          <Icon className="text-white" size={16} aria-label={name} />
        </a>
      ))}
          </div>
        </motion.div>

        {/* Menu */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            {menuItems.map(({ name, path }) => (
              <li key={name} className="hover:text-white transition cursor-pointer">
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Destinations */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-4">Destinations</h4>
          <div className="grid grid-cols-2 gap-2">
            {destinations.map(({ name, image }) => (
              <div key={name} className="overflow-hidden rounded-md shadow-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <span className="mr-2 text-lg "><IoLocationSharp /> </span>
              <span>13608 119 Street Northwest, Edmonton, AB, Canada</span>
            </li>
            <li className="flex items-center ">
              <span className="mr-2 text-lg"><BsTelephoneForwardFill /> </span>
              <span>+1780-709-5650</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-lg "><IoMdMailUnread /></span>
              <span>reservations@doozytrips.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        variants={columnVariants}
        transition={{ delay: 0.6 }}
        className="border-t border-gray-700 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <span>Copyright © 2025 Doozy Trips - All Rights Reserved.</span>
          <span className="mt-2 md:mt-0">Designed &amp; Developed by Do More Services</span>
        </div>
      </motion.div>
    </motion.footer>
    </>
  )
}
