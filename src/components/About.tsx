import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Star } from "lucide-react";
import  Card  from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import TextType, { TextAnimate } from "./splittext";
import { Globe, PhoneCall, HeartHandshake, Compass } from "lucide-react";
import { PlaneTakeoff, DollarSign, Headset } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MetaDataAbout from "./Aboutmeta";
export default function Aboutus() {
  const fadeUp = {
hidden: { opacity: 0, y: 30 },
visible: (i = 1) => ({
opacity: 1,
y: 0,
transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
}),
};
  return (
      <>
      <MetaDataAbout/>
      <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      {/* Banner */}
      <section className="bg-sky-700 text-white pt-40">
         
          <section className="max-w-5xl mx-auto p-6 md:p-10">
{/* </motion.h2> */}
<motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl text-center font-extrabold"
          >
     We are Doozy Trips,
          </motion.h1>
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold mt-2 sm:text-5xl md:text-6xl">
          Find Your Adventure Buddy
        </h1>
        <p className="mt-4 text-xl ">
          The greatest adventures are best enjoyed with others.
        </p>
        
        <div className="mt-10 bg-white rounded-lg shadow-lg p-8">
          <p className="mt-4 text-lg text-gray-700">
            Because of this, our travel buddy platform makes it simple to meet like-minded Canadians, find a travel companion in Canada, and participate in group excursions that cater to all types of adventurers. You can find the right people to accompany you on your journey, whether your dreams involve exciting city escapes, picturesque hikes in the Rockies, or adventure travel in Canada.
          </p>
          <p className="mt-6 text-lg text-gray-700">
            We also recognize the importance of wise, economical travel. Our platform facilitates cost-sharing and the creation of enduring memories by connecting you with organized tour groups and low-cost travel companions in Canada. Because travel is always better when done with others, Doozy Trips makes every trip more memorable, more social, and more reasonably priced.
          </p>
        </div>
      </div>
<motion.p
variants={fadeUp}
custom={1}
className="mt-4 text-white text-center max-w-2xl mx-auto"
>
We’re more than just a booking site—we’re your one-stop travel companion,
dedicated to making every journey affordable, effortless, and unforgettable.
From flights to all your travel needs, we bring everything together on one convenient platform, saving you time, effort, and stress.
</motion.p>


<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
<motion.div
variants={fadeUp}
custom={2}
className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
>
<Globe className="text-indigo-600 dark:text-indigo-300 mb-3" size={32} />
<h3 className="font-semibold text-lg">One-stop travel platform</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
From flights to itineraries and insider tips, we provide a complete travel solution—making your trips seamless and stress-free.
</p>
</motion.div>


<motion.div
variants={fadeUp}
custom={3}
className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
>
<HeartHandshake className="text-emerald-600 dark:text-emerald-300 mb-3" size={32} />
<h3 className="font-semibold text-lg">Customer-first service</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
Every journey is smooth, safe, and reliable thanks to our strong focus on personalized, customer-first service.
</p>
</motion.div>


<motion.div
variants={fadeUp}
custom={4}
className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
>
<Compass className="text-amber-600 dark:text-amber-300 mb-3" size={32} />
<h3 className="font-semibold text-lg">Personalized experiences</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
From curated itineraries and insider tips to sustainable choices supporting local communities, we help you travel smarter and more responsibly.
</p>
</motion.div>


<motion.div
variants={fadeUp}
custom={5}
className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/90 shadow-md"
>
<PhoneCall className="text-rose-600 dark:text-rose-300 mb-3" size={32} />
<h3 className="font-semibold text-lg">24/7 Global Support</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
Adventure never sleeps—neither do we. Our team is available 24/7 via call or WhatsApp. Based in Edmonton with global reach, we’re always here for you.
</p>
</motion.div>
</div>


<motion.div
variants={fadeUp}
custom={6}
className="mt-12 text-center"
>
<p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100">
Join our travel tribe and discover the world the Doozy way — safe,
smooth, and spectacular.
</p>
</motion.div>
{/* </motion.div> */}
</section>
  
  

          
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-sky-100"
          >
          {/* <TextType text="We’re more than just a booking site—we’re your one-stop travel companion, dedicated to making every journey affordable, effortless, and unforgettable. From flights to all your travel needs, we bring everything together on one convenient platform, saving you time, effort, and stress. With a strong focus on customer-first service, we ensure that every trip is not only smooth but also safe and reliable.

" /> */}
          </motion.p>
        </div>
      </section>

      {/* Features */}
            <div className="!text-black !text-5xl !font-bold text-center mt-10">
                  <TextType  textColors={["black"]}  text=" Why Choose Us" />
            </div>
      <section className="max-w-6xl flex justify-center mx-auto px-4 py-12 md:py-16">

        <div className="grid md:grid-cols-3 gap-8">
          
             
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" 
️ Emergency Travel services  
" sub=" With Doozy Trips, booking flights is faster than ever. Our instant flight booking service ensures you get confirmed tickets in just a few clicks—no waiting, no delays.
" icon={"✈"} >
             
          </Card>
          <Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head=" Affordable Fares, Maximum Value" sub="We specialize in finding the best deals on flights so you can travel without overspending. With us, affordability meets convenience, giving you more value for every journey.
"  icon="💰">
             
          </Card>
<Card  ele={ <span><Star className="h-6 w-6 text-sky-700" /> </span> } head="
Reliable Support, Anytime
" sub="From last-minute bookings to urgent travel needs, our team is here for you 24/7. Doozy Trips makes air travel simple, secure, and stress-free, every single time." icon="🤝" >
             
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
