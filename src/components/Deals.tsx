import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star, Medal, Route, Zap, CalendarDays, PlaneTakeoff } from "lucide-react";
import  Card  from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import TextType, { TextAnimate } from "./splittext";

export default function Deals() {
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
          Hot deals—your last-minute goldmine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-lg  text-sky-100"
          >
          <TextType text="Why Book Now?
Sometimes the best trips are the ones you didn’t see coming. At Doozy Trips, we turn sudden plans into smart savings. From flash sales on Canada–India flights to weekend getaway specials and exclusive clearance fares, our deals help you travel more while spending less.
We constantly track airline discounts and time-sensitive offers, meaning you don’t just get availability — you get value that makes spontaneity affordable. With us, booking late doesn’t mean paying more.


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
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="  Flash Sales & Limited Offers 
" sub="  Stay ahead with real-time access to fares that disappear fast.


" icon = {<Zap   className="text-rose-600 dark:text-rose-300" size={36} />} >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
Weekend & Holiday Specials
" sub="  Perfect for short breaks or festive season escapes.

" icon={<CalendarDays className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="Smart Savings on Urgent Travel" sub=" Even last-minute flyers can lock in surprisingly affordable prices.


" icon={<PlaneTakeoff   className="text-rose-600 dark:text-rose-300" size={36} />}>
             
          </Card>

          

          {/* <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
             
            </CardContent>
          </Card> */}
        </div>
      </section>

            <div className="!text-black text-3xl md:text-5xl font-semibold text-center mt-5 mb-5">
                  <TextType  textColors={["black"]}  text="CTA" />
            </div>
            <div className="mt-10 mb-5
            p-8 bg-sky-700  text-center  text-white md:text-xl md:w-[80vw] flex justify-center m-auto rounded-full">
             Don’t miss out. Subscribe to our alerts or simply drop us a line—we’ll send you the latest deals and help you grab them before they’re gone.

            </div>
      {/* <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" Handpicked tours—great value, even when plans change fast


" sub=" 
" >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
Cruises included? From the Pacific coast to Caribbean joys—pack your bags, we’ll handle the rest.
" sub=" 
" >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="

Get support from booking to disembarkment.
" sub="  
" >
             
          </Card> */}

          

          {/* <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
             
            </CardContent>
          </Card> */}
        {/* </div>
      </section> */}

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
