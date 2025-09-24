// src/components/DoozyTrips.tsx

import React from 'react';

const DoozyTripsLanding: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Find Your Perfect Travel Buddy in Canada with DoozyTrips
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Visiting Canada is great, but having the right company makes it all fun.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Discover Canada Together</h2>
            <p className="mt-4 text-gray-700">
              DoozyTrips provides an easy way to find a travel buddy in Canada to share your time on the road with. Whether you are planning a cross-country journey, a weekend break or even just looking for scenic mountain holidays, we introduce you to fellow travel mates in Canada that have the same dream as yours. From the streets of Toronto to beautiful Banff to culture-rich Montreal, countless attractions show off the true diversity of this nation.
            </p>
          </div>

          {/* Section 2: How It Works & Community */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900">Connect & Create</h2>
            <p className="mt-4 text-gray-700">
              Our platform is for people who believe in more than a trip—they believe in making connections. You can get involved in organized group travel Canada adventures through DoozyTrips or create your own customized trip plans by connecting with and meeting others who have the same interests and goals as you. You can look up and join well organized shared trips Canada to make sure your every trip is an exciting one without any stress. Whether you prefer nature hikes, city explorations, or cross-country road trips, you’ll find plenty of opportunities to meet travelers in Canada and start your adventure together.
            </p>
          </div>
        </div>

        {/* Section 3: Call to Action */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">It's Never Been Easier</h2>
          <p className="mt-4 text-gray-700">
            All you need to do is register, browse for trips and select travel buddies that suit your style. We're a group that welcomes solo travelers, couples and small groups who want to widen their circle. When you participate in shared trips Canada, you save money and create memories, but also make new friends!
          </p>
          <p className="mt-4 text-gray-700 font-semibold">
            Well, why should you travel alone while potential great moments can be shared with someone?
          </p>
          <p className="mt-2 text-gray-700">
            Use DoozyTrips to look for Travel Partners and start Exploring Canada with like-minded Travelers who share a passion for travel. Let your next journey be about more than just the places you visit—it’s about making memories and a life-time of new experiences along with lifelong friends.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DoozyTripsLanding;