import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['13608 119 Street Northwest, Edmonton, AB, Canada']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+1(780)7095650']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [ 'reservations@doozytrips.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}>
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Ready to create your next unforgettable experience? Contact our expert team today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className={`text-2xl font-bold text-gray-800 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>Send us a Message</h3>
            <form className="space-y-6">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Event Planning Inquiry"
                />
              </div>
              
              <div className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`} style={{ transitionDelay: '1000ms' }}>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-700 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <info.icon className="text-blue-800" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        {/* <div className={`mt-16 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="h-96 bg-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">123 Business Avenue, New York, NY 10001</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;