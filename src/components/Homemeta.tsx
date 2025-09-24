// src/components/MetaData.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaData: React.FC = () => {
  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>Travel Buddy in Canada | Group Travel, Tours & Trip Leaders | Doozy Trip</title>
      <meta name="description" content="Find your perfect travel buddy in Canada with Doozy Trip. Join exciting group travel adventures, guided tours, and connect with experienced trip leaders to explore Canada’s top destinations on a budget-friendly, memorable journey." />
      <meta name="keywords" content="travel buddy Canada, find travel buddy, group travel Canada, travel companions Canada, shared trips Canada, meet travelers Canada, join group trips, Canadian travel buddies, adventure travel Canada, budget travel companions, tour groups Canada, travel partner Canada, travel buddy site, travel buddy platform" />
      <link rel="canonical" href="https://www.doozytrips.com/" />

      {/* Robot Directives */}
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="noodp, noydir" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="Googlebot" content="Index,Follow" />
      <meta name="YahooSeeker" content="Index,Follow" />

      {/* Geolocation & Classification */}
      <meta name="city" content="Edmonton" />
      <meta name="State" content="Alberta" />
      <meta name="classification" content="doozytrips" />
      <meta name="distribution" content="Global" />
      <meta name="Content-Language" content="EN" />
      <meta name="allow-search" content="Yes" />

      {/* Open Graph Meta Tags (for social media) */}
      <meta property="og:title" content="Travel Buddy in Canada | Group Travel, Tours & Trip Leaders | Doozy Trip" />
      <meta property="og:description" content="Find your perfect travel buddy in Canada with Doozy Trip. Join exciting group travel adventures, guided tours, and connect with experienced trip leaders to explore Canada’s top destinations on a budget-friendly, memorable journey." />
      <meta property="og:image:alt" content="https://www.doozytrips.com/banner/7.png" />
      <meta property="og:url" content="https://www.doozytrips.com/" />
      <meta property="og:site_name" content="Doozy trip travel companion" />
      <meta property="og:type" content="article" />
      <meta property="og:locality" content="Edmonton" />
      <meta property="og:region" content="Canada" />
      <meta property="og:country_name" content="Canada" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" /> {/* You had both 'article' and 'website', usually one is better. I kept 'website' here for a homepage. */}

      {/* Article Meta Tags */}
      <meta name="article:section" content="Doozy trip travel companion" />
      <meta name="article:author" content="doozytrips.com" />
      <meta name="article:tag" content="travel buddy Canada, find travel buddy, group travel Canada, travel companions Canada, shared trips Canada, meet travelers Canada, join group trips, Canadian travel buddies, adventure travel Canada, budget travel companions, tour groups Canada, travel partner Canada, travel buddy site, travel buddy platform" />
    </Helmet>
  );
};

export default MetaData;