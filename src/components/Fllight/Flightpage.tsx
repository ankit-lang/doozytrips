import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star, Route, Medal } from "lucide-react";
import  Card  from "../Card";
import Header from "../Header";
import Footer from "../Footer";
import TextType, { TextAnimate } from "../splittext";
import Metaflight from "./Meta";
// import { Meta } from "react-router-dom";

export default function Flightpage() {
  return (
      <>
      <Metaflight/>
      <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      {/* Banner */}
      <section className="bg-sky-700 text-white pb-20  pt-40">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            Flight deals that don’t let urgency cost you more.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-sky-100"
          >
          <TextType text="Need to fly out tomorrow—or even today? Don’t stress. At Doozy Trips, we specialize in last-minute flight bookings that keep your travel affordable and hassle-free. Whether you’re flying within Canada or across the globe, our team works around the clock to secure the best available fares. With 24/7 personal support, one quick call or email is all it takes to get you moving.

" />
          </motion.p>
        </div>
      </section>

      {/* Features */}
            <div className="!text-black md:text-5xl font-semibold text-3xl  text-center mt-10">
                  <TextType  textColors={["black"]}  text="Features" />
            </div>
      <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="  Last-minute flights from major Canadian hubs
" sub="  Departing from Toronto, Vancouver, Calgary, Edmonton, or Montreal? We find the fastest and most cost-effective routes available—so you don’t waste time searching.

" icon = {<Plane className="text-rose-600 dark:text-rose-300" size={36} />} >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
Multi-city itineraries made easy
" sub=" Whether it’s Canada to India and back, or multiple stops along the way, we stitch together complex routes with clockwork precision. You focus on the trip—we handle the planning.
" icon={<Route className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="Maximize your frequent flyer programs" sub="  Already part of an airline loyalty program? We’ll make sure your miles and points work harder for you, so you get more value every time you fly.

" icon={<Medal  className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>

          

          {/* <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
             
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-semibold mb-2">
              Q: Wasn’t planning ahead—is that a problem?
            </h3>
            <p className="text-gray-700">
              A:  Not at all. In fact, that’s our specialty. We’re experts in finding the best fares under tight timelines, so you can travel worry-free—even if it’s a last-minute emergency.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
