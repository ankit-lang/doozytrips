import React from 'react';
import { CheckCircle, Users, Globe, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Events Managed', icon: Trophy },
    { number: '50+', label: 'Countries Covered', icon: Globe },
    { number: '10,000+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: CheckCircle }
  ];

  const features = [
    'Personalized service approach',
    '24/7 on-site support',
    'Global network of partners',
    'Sustainable travel practices',
    'Cutting-edge technology',
    'Multilingual team'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}>
              About <span className="text-amber-500">iShull DMC</span>
            </h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              With over 15 years of expertise in destination management, iShull DMC has established itself 
              as a premier provider of comprehensive travel and event solutions. We specialize in creating 
              extraordinary experiences that leave lasting impressions.
            </p>
            <p className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              Our dedicated team of professionals combines local knowledge with global standards to deliver 
              seamless, innovative, and sustainable travel solutions for corporate clients worldwide.
            </p>

            {/* Features */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-700 transform hover:scale-105 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '1300ms' }}>
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="About iShull DMC"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className={`absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '1000ms' }}>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`}
              style={{ transitionDelay: `${1400 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-800 transition-colors duration-300">
                <stat.icon className="text-blue-800 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;