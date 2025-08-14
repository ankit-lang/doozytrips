// src/components/Support/SupportPage.tsx
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

export default function SupportPage() {
  return (
      <>
      <Header/>
    <div className="min-h-screen py-40  flex flex-col items-center  px-6">
      {/* Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Need help now?{" "}
        <span className="text-blue-600">We're on it</span>—contact us via chat,
        email, or phone.
      </motion.h1>

      {/* Support Options */}
      <motion.div
        className="bg-gray-100 rounded-xl mb-10 shadow-lg max-w-3xl w-full p-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">
            <a
              href="mailto:reservations@doozytrips.com"
              className="text-blue-600 underline"
            >
              reservations@doozytrips.com
            </a>{" "}
            — get answers within hours
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
          <p className="text-gray-600">
            Canada:{" "}
            <a href="tel:+17807095650" className="text-blue-600">
              +1 780-709-5650
            </a>{" "}
            • India:{" "}
            <a href="tel:+919991865675" className="text-blue-600">
              +91 99918 65675
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Real-Time Help</h2>
          <p className="text-gray-600">
            Real-time advice and backup support—through booking and mid-trip.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-blue-700 font-semibold">Insider Tip</h3>
          <p className="text-gray-700">
            Send us your emergency travel needs, and we’ll match you with the
            best solution—fast.
          </p>
        </div>
      </motion.div>
    </div>
      <Footer/>
    </>
  );
}
