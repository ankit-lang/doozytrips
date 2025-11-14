import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // Flights • Vacations • Last-Minute Packages • Tours & Cruises • Car Rentals • Travel Insurance • Deals
    { name: 'Home', href: '/' },
    { name: 'Fligts', href: '/flights' },
    { name: 'Vacations', href: '/vacations' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Tours & Cruises', href: '/tours' },
      { name: 'Notes', href: '/notes' },
        { name: 'Help&Support', href: '/support' },
          { name: 'Deals', href: '/deals' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`bg-primary text-white hidden md:flex text-sm py-2 md:px-20 px-2 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto text-center  flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center  text-center justify-center space-x-2">
              <Phone size={14} />
              <span> +1(780)7095650</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>reservations@doozytrips.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Canada</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`container mx-auto px-4 py-4 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`} style={{ transitionDelay: '200ms' }}>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
          <div className=" w-[3rem] 
           "> 
            <img src={logo} alt="logo"  />
          </div>
           </Link>
          {/* <div className={`text-2xl font-bold text-blue-800 transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            Dozzy<span className="text-white">Trips</span>

          </div> */}

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-300 hover:text-white hover:bg-primary p-2
                   rounded-full ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className={`bg-primary text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all duration-700 transform hover:scale-105 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              Get Quote
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* <button className="w-full mt-4 bg-primary text-white py-2 rounded-full hover:bg-amber-600 transition-colors">
              Get Quote
            </button> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;