import React from 'react';
import { Plane, Calendar, MapPin, ArrowRight, Menu, CheckCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const DoozyBlogPage = () => {
      const brandColor = "#0077b5";
      const schemaData = {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Doozy Trips",
            "url": "https://www.doozytrips.com",
            "logo": "https://www.doozytrips.com/assets/logo-Cui3VJTW.png",
            "description": "Doozy Trips offers last-minute flight tickets and low-cost flights in Canada with fast support.",
            "sameAs": [
                  "https://www.facebook.com/profile.php?id=61579441106724",
                  "https://www.instagram.com/doozy_trips/",
                  "https://x.com/DoozyTrips"
            ],
            "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "CA"
            }
      };
      return (
            <HelmetProvider>
                  <Helmet>
                        {/* Primary Meta Tags */}
                        <title>Last-Minute Tickets Today | Low Cost Flights Canada | Doozy Trip</title>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="description" content="Looking for low cost flights in Canada? Doozy Trips offers fast last-minute booking, budget-friendly deals, and personalized support—travel more while spending less." />
                        <meta name="keywords" content="low cost flights Canada, last minute tickets Canada, cheap flights Canada, budget flights, last minute flight deals, affordable flights Canada, doozy trips, travel in canada" />

                        {/* Canonical URL */}
                        <link rel="canonical" href="https://www.doozytrips.com/" />

                        {/* Robots Tags */}
                        <meta name="robots" content="index, follow" />
                        <meta name="googlebot" content="index, follow" />

                        {/* Open Graph / Facebook */}
                        <meta property="og:title" content="Last-Minute Tickets Today | Low Cost Flights Canada | Doozy Trip" />
                        <meta property="og:description" content="Book low cost flights in Canada with Doozy Trips. Last-minute deals, affordable fares & quick booking support." />
                        <meta property="og:image" content="https://www.doozytrips.com/banner/7.png" />
                        <meta property="og:url" content="https://www.doozytrips.com/" />
                        <meta property="og:type" content="website" />

                        {/* Twitter Card */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Last-Minute Tickets Today | Low Cost Flights Canada | Doozy Trip" />
                        <meta name="twitter:description" content="Find affordable last-minute flights across Canada with Doozy Trips. Book fast & save more!" />
                        <meta name="twitter:image" content="https://www.doozytrips.com/assets/flight-banner.jpg" />

                        {/* Schema JSON-LD Script */}
                        <script type="application/ld+json">
                              {JSON.stringify(schemaData)}
                        </script>
                  </Helmet>
            <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
                  
                  {/* --- Navigation --- */}
                 <Header/>
                  {/* --- Hero / Header Section --- */}
                  <header className="relative pt-32" style={{ backgroundColor: brandColor }}>
                        <div className="absolute inset-0 bg-black opacity-10 pattern-grid-lg"></div>
                        <div className="relative max-w-4xl mx-auto px-4 text-center">
                              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider mb-4 border border-white/20">
                                    TRAVEL TIPS & GUIDES
                              </span>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                    Your Best Source for Last-Minute Tickets & Low Cost Flights in Canada
                              </h1>
                              <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> November 25, 2025</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Canada </span>
                              </div>
                        </div>
                  </header>

                  {/* --- Main Content Layout --- */}
                  <div className="bg-[#0077b5] text-white py-10 px-6 md:px-64 shadow-md w-full mx-auto">
                        {/* <h1 className="text-3xl font-bold mb-4">
                              Your Best Source for Last-Minute Tickets & Low Cost Flights in Canada
                        </h1> */}
                        <p className="mb-4">
                              Looking for the <strong>best low-cost flights across Canada</strong>—especially at the last minute? <span className="font-semibold">Doozy Trips</span> has you covered. Whether you’re planning a sudden business trip, a weekend getaway, or an urgent family visit, finding affordable flights on short notice can feel stressful. That’s exactly why Doozy Trips was created: to make spontaneous travel easy, fast, and budget-friendly for every Canadian.
                        </p>
                        <p className="mb-4">
                              At <span className="font-semibold">Doozy Trips</span>, we specialize in last-minute ticket deals that help you fly without burning a hole in your wallet. Our platform connects you with multiple airlines, exclusive discounts, and real-time fares so you can grab the lowest prices available right now. No matter where you’re heading—Toronto, Vancouver, Calgary, Montreal, or any major Canadian destination—you’ll find options tailored to your budget and timing.
                        </p>
                        <p className="mb-4">
                              What makes Doozy Trips different is our focus on affordability without complicating your travel experience. We understand that last-minute travelers need two things: <strong>speed and savings</strong>. Our team ensures both by offering a simple booking process, transparent pricing, and support that’s always ready to assist. From quick confirmations to flexible flight choices, you get everything you need to plan a trip on the go.
                        </p>
                        <p className="mb-4">
                              Whether you're a student flying home, a frequent business traveler, or someone craving a spontaneous adventure, Doozy Trips lets you travel more while spending less. With our last-minute deals, you don’t have to wait for seasonal offers—your affordable flight is available today.
                        </p>
                        <p className="mb-6">
                              Skip the stress, skip the endless searching. <strong>Book smarter with Doozy Trips</strong> and discover how easy low-cost flying in Canada can be. Your next destination is only one click away.
                        </p>
                       
                  </div>
                  <Footer/>
            </div>
            </HelmetProvider>
      );
};

export default DoozyBlogPage;