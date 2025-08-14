// src/components/FooterNotes/FooterNotesPage.tsx
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import TextType from "./splittext";

export default function FooterNotesPage() {
  return (
      <>
      <Header/>
    <div className="min-h-screen bg-white flex flex-col items-center py-40 px-6">
      {/* Page Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <TextType text="Notes" textColors={["black"]} />
      </motion.h1>

      {/* Notes Container */}
      <motion.div
        className="bg-gray-100 rounded-xl shadow-lg max-w-4xl w-full p-8 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Privacy & Terms */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Privacy & Terms
          </h2>
          <p className="text-gray-600 mt-2">
            We protect your data—always encrypted.
          </p>
        </div>

        {/* Booking Fee Notice */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Booking Fee Notice
          </h2>
          <p className="text-gray-600 mt-2">
            A standard Expert Service Fee applies to phone or email
            reservations. Transparent pricing, no surprises.
          </p>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Legal</h2>
          <p className="text-gray-600 mt-2">
            Conditions apply. Prices in CAD, including taxes/fees. Availability
            limited for last-minute travel; additional destination charges may
            apply.
          </p>
        </div>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
}
