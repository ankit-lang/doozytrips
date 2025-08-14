import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star } from "lucide-react";
import  Card  from "../Card";
import Header from "../Header";
import Footer from "../Footer";
import TextType, { TextAnimate } from "../splittext";

export default function Flightpage() {
  return (
      <>
      <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      {/* Banner */}
      <section className="bg-sky-700 text-white   py-40">
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
          <TextType text="Stuck with tomorrow’s travel plans? We’ll sort flights across Canada and worldwide at wallet-friendly prices. With 24/7 support, you can call or email us anytime—and now you’re moving.
" />
          </motion.p>
        </div>
      </section>

      {/* Features */}
            <div className="!text-black text-3xl text-center mt-5">
                  <TextType  textColors={["black"]}  text="Features" />
            </div>
      <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" Last-minute flights from major Canadian hubs:" sub="  Toronto, Vancouver, Calgary, Edmonton, Montreal, etc.
" >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 

Multi-city itineraries handled like clockwork
" sub=" 
" >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="Frequent flyer programs? We’ll help you use them!" sub="  
" >
             
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
              A: Nope—our specialty is best prices when you're on a tight timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
