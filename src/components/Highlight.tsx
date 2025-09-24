import React from "react";
import { motion } from "framer-motion";
import {  Plane ,Globe, Clock, PhoneCall } from "lucide-react";

export default function EmergencyTravelHighlights() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className=" mx-auto p-6 md:p-10">
      <div className="bg-white dark:bg-[#0077b5] rounded-2xl shadow-lg p-6 md:p-10">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl md:ml-4 text-white font-extrabold leading-tight">
              Key Highlights
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-prose">
             
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="mt-4 md:mt-0 flex gap-3"
          >
            <a
              href="#book"
              className="inline-flex md:mr-4 items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg focus:outline-none"
            >
              <Plane size={16} />
              Book Now
            </a>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-100 font-medium hover:bg-slate-50"
            >
              <PhoneCall size={16} />
              Contact Support
            </a> */}
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.article
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.8}
            variants={cardVariants}
          >
              <div className="p-3 rounded-xl text-center mx-auto bg-indigo-50 dark:bg-indigo-900/30">
                <Plane className="text-indigo-600 inline-block dark:text-indigo-300" />
              </div>
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-semibold text-slate-600 dark:text-white/90 text-lg">Emergency travel solutions at unbeatable rates</h3>
                <p className="mt-1 text-center text-sm text-slate-600 dark:text-white/90">
     Life is unpredictable—flights don’t have to be. Whether it’s a family emergency, an urgent business meeting, or a sudden travel plan, Doozy Trips specializes in last-minute Canada–India and India–Canada flights. Our exclusive airline connections allow us to find the best fares in the shortest time, saving you stress and money.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={cardVariants}
          >
              <div className="p-3 rounded-xl text-center bg-emerald-50 dark:bg-emerald-900/30">
                <Globe className="text-emerald-600 inline-block dark:text-emerald-300" />
              </div>
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-semibold text-slate-600 dark:text-white/90 text-center text-lg">Canada-wide service, and support </h3>
                <p className="mt-1 text-center text-sm text-slate-600 dark:text-white/90">
                  From Toronto to Vancouver, Calgary to Edmonton—we serve travelers all across Canada. And the support doesn’t stop once you land. With dedicated teams in both Canada and India, you’ll always have a helping hand no matter which country you’re in. We’re truly a travel partner that moves with you.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1.2}
            variants={cardVariants}
          >
              <div className="p-3 text-center rounded-xl bg-amber-50 dark:bg-amber-900/30">
                <Clock className="text-amber-600 inline-block dark:text-amber-300" />
              </div>
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-semibold text-slate-600 dark:text-white/90 text-center text-lg">Friendly 24/7 personal assistance</h3>
                <p className="mt-1 text-sm text-center text-slate-600 dark:text-white/90">
                  Travel emergencies don’t wait for business hours—and neither do we. Our team is available around the clock, ready to book, reschedule, or assist with your travel needs instantly. Whether you prefer a quick call, WhatsApp chat, or email, you’ll always get personalized support with a smile. 
                </p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-3 bg-indigo-50 shadow-sm">
              <PhoneCall />
            </div>
            <div>
              <p className="text-md text-white">
                Need help now? Call our emergency line or message us on WhatsApp —
                we’re standing by.
              </p>
              <p className="mt-1 font-medium text-slate-800 dark:text-slate-100">+1 (555) 123‑4567</p>
            </div>
          </div>

          {/* <div className="text-sm text-slate-500">Trusted across Canada • Support in India</div> */}
        </div>
      </div>
    </section>
  );
}
