import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchBar } from './Searchbar';
import iter from "../assests/iter.png";
const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSearch = ({ destination, date, tourType }) => {
    console.log('Search params:', destination, date, tourType)
    // e.g. router.push(`/results?dest=${destination}&date=${date}&type=${tourType}`)
  }

  const slides = [
    {
      image: "/banner/3.png",
      title: 'Emergency travel solutions at unbeatable rates',
      subtitle: 'When you need to go now, you deserve great value. Call, email, or message us—can’t wait, won’t wait'
    },
    {
      image: "/banner/2.png",
      title: 'Canada-wide service, and support on both sides of the globe',
      subtitle: 'When you need to go now, you deserve great value. Call, email, or message us—can’t wait, won’t wait'
    },
    {
      image: "/banner/3.png",
      title: 'Friendly, 24/7 personal assistance',
      subtitle: 'When you need to go now, you deserve great value. Call, email, or message us—can’t wait, won’t wait.'
    },
   
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images */}
     <div className="absolute inset-0">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 2000ms ease-in-out, opacity 1000ms ease-in-out'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  ))}
</div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-8  top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-700 hover:scale-110 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-700 hover:scale-110 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 z-5">
        <div className={`floating-element absolute top-20 left-10 w-20 h-20 bg-amber-500 opacity-20 rounded-full transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-20' : 'translate-y-24 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}></div>
        <div className={`floating-element absolute top-40 right-20 w-16 h-16 bg-blue-500 opacity-20 rounded-full transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-20' : 'translate-y-24 opacity-0'
        }`} style={{ animationDelay: '2s', transitionDelay: '1400ms' }}></div>
        <div className={`floating-element absolute bottom-40 left-20 w-12 h-12 bg-white opacity-20 rounded-full transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-20' : 'translate-y-24 opacity-0'
        }`} style={{ animationDelay: '4s', transitionDelay: '1600ms' }}></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-20 mx-auto">
        <div className={`transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title.split(' ').map((word, index) => (
              <span 
                key={index} 
                className={`inline-block transition-all duration-1000 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                } ${index === slides[currentSlide].title.split(' ').length - 1 ? 'block text-amber-500' : ' '}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* { "   "+  word } {index !== slides[currentSlide].title.split(' ').length - 1 ? ' ' : ''} */}
              </span>
            ))}
            {slides[currentSlide].title}
          </h1>
        </div>


        
        <div className={`transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}>
          <p 
            className="text-md md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            style={{ transitionDelay: '600ms' }}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}>
          <button 
            className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            style={{ transitionDelay: '800ms' }}
          >
            <span>CALL US</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button 
            className="group bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300"
          
          >
            <Play size={20} />
            <span>WHATSAPP</span>
          </button>
        </div>
        <div className="mt-10">

      <SearchBar onNext={handleSearch}  /> 
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className={`absolute bottom-8 left-1/2 hidden  md:flex transform -translate-x-1/2 z-20 flex space-x-3 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`} style={{ transitionDelay: '1200ms' }}>
        {slides.map((_, index) => (
          <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide 
            ? 'bg-primary scale-125' 
            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
          }`}
          aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}>
        <div className="scroll-indicator" style={{ transitionDelay: '1400ms' }}>
          <div className="scroll-line"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;