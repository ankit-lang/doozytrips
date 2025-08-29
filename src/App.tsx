import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopTours from './components/Toptour';
import AboutSection from './components/Aboutsection';
import PopularDestinations from './components/Populardestination';
import AdventureActivity from './components/Adventureisland';
import EmergencyTravelHighlights from './components/Highlight';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <TopTours/> */}
      <EmergencyTravelHighlights/>
      <AboutSection/>
      {/* <PopularDestinations/> */}
    

      <AdventureActivity/>
 
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;