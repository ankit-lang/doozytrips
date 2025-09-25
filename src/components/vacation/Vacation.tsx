import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star, Users, MousePointerClick, Umbrella } from "lucide-react";
import  Card  from "../Card";
import Header from "../Header";
import Footer from "../Footer";
import TextType, { TextAnimate } from "../splittext";
import Metavac from "./Meta";

export default function Vacationpage() {
  return (
      <>
      <Metavac/>
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
           Holidays in a hurry? We’ll hook you up
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-sky-100"
          >
          <TextType text="Last-minute vacation? No problem. Whether you’re craving a quick beach escape, a cultural getaway, or a family holiday, Doozy Trips makes it easy. We focus on flights and planned travel itineraries so you can enjoy a smooth, stress-free trip without the endless searching. Our goal is to get you moving fast—affordably, reliably, and with zero hassle.
" />
          </motion.p>
        </div>
      </section>

      {/* Features */}
            <div className="!text-black md:text-5xl text-4xl font-semibold text-center mt-5">
                  <TextType  textColors={["black"]}  text="Extras" />
            </div>
      <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" Vacations built around your vibe


" sub="  Looking for a calm retreat, an adventurous journey, or a sightseeing-packed itinerary? We’ll suggest options that fit your style and budget—so you enjoy the trip, your way.
" icon={<Umbrella className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
 Simple, no-hassle booking
" sub=" No complicated logins or accounts needed. Just share your details, and our team does the work—booking your flights and setting up your travel plan.
 " icon ={<MousePointerClick className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="Perfect for everyone
" sub="From solo escapes and couple getaways to family or group vacations, we make sure your travel plan works for all. Need special arrangements (like mobility support or dietary considerations)? We’ve got you covered.  
" icon={<Users   className="text-rose-600 dark:text-rose-300" size={36} />}>
             
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
