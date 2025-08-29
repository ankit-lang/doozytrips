// src/components/Support/SupportPage.tsx
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import TextType from "./splittext";

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
      <div className="mb-10 md:max-w-[72vw] w-[90vw] text-center ">
        <TextType  textColors={["black"]}  text="At Doozy Trips, we know travel plans can change in an instant. That’s why our support team is always just a message or call away, ready to solve problems before they become stress. Whether you’re trying to book a last-minute flight, reschedule an itinerary, or get mid-trip assistance, we’re available 24/7 to keep you moving." />
      </div>
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
            — Expect a quick response—most queries are answered within hours so you’re never left waiting.
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
           From booking to boarding and even mid-journey hiccups, we’re here to guide you with instant solutions.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-blue-700 font-semibold">Insider Tip</h3>
          <p className="text-gray-700">
            Got an emergency travel need? Share the details with us, and we’ll instantly scan the best options—fast, practical, and wallet-friendly.
          </p>
        </div>
      </motion.div>
    </div>
      <Footer/>
    </>
  );
}
