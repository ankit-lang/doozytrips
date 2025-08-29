import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star, Ship, Headphones } from "lucide-react";
import  Card  from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import TextType, { TextAnimate } from "./splittext";

export default function Tours() {
  return (
      <>
      <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      {/* Banner */}
      <section className="bg-sky-700 text-white py-40">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
        Tours & Cruises—even if it’s last minute, we have your back.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-sky-100"
          >
          <TextType text=" Dreaming of a guided tour or a cruise getaway but pressed for time? With Doozy Trips, you don’t need months of planning—we make it possible to jump aboard at the last minute. From river cruises and cultural city tours to wilderness adventures and ocean voyages, we help you experience the world on your terms. Best of all, we tailor every option to your urgency without ever compromising value or comfort.

" />
          </motion.p>
        </div>
      </section>

      {/* Features */}
            <div className="!text-black text-3xl font-semibold  md:text-5xl  text-center mt-5">
                  <TextType  textColors={["black"]}  text="Highlights" />
            </div>
      <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" Handpicked tours at unbeatable value


" sub=" Our curated tours are designed to give you authentic experiences—whether you’re exploring a new city or heading out into nature. Even if plans shift suddenly, we’ll help you secure a spot without the stress.
" icon={<MapPin className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
 Cruises made easy

" sub="   From breathtaking Pacific Coast escapes to vibrant Caribbean adventures, our last-minute cruise deals get you moving fast. You just pack your bags—we’ll take care of the rest.


" icon={<Ship className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="
Support from start to finish
" sub="  Booking, boarding, exploring, or disembarking—our 24/7 team ensures you’re supported at every step, so your trip flows as smoothly as the waters you sail on.
" icon={<Headphones   className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>

          

          {/* <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
             
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-semibold mb-2">
              Q: Wasn’t planning ahead—is that a problem?
            </h3>
            <p className="text-gray-700">
              A: Nope—our specialty is best prices when you're on a tight timeline.
            </p>
          </div>
        </div>
      </section> */}
    </div>
    <Footer/>
    </>
  );
}
