// src/components/MetaDataAbout.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaDataAbout: React.FC = () => {
  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>Travel Companion Canada | Find Travel Buddy & Group Trips with Doozy Trips</title>
      <meta name="description" content="Connect with like-minded travelers and find your ideal travel companion in Canada with Doozy Trips—your gateway to group trips and unforgettable adventures." />
      <meta name="keywords" content="travel buddy Canada, find travel buddy, group travel Canada, travel companions Canada, shared trips Canada, meet travelers Canada, join group trips, Canadian travel buddies, adventure travel Canada, budget travel companions, tour groups Canada, travel partner Canada, travel buddy site, travel buddy platform,Find Travel Buddy" />
      <link rel="canonical" href="https://www.doozytrips.com/aboutus/" />

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
      <meta property="og:title" content="Travel Companion Canada | Find Travel Buddy & Group Trips with Doozy Trips" />
      <meta property="og:description" content="Connect with like-minded travelers and find your ideal travel companion in Canada with Doozy Trips—your gateway to group trips and unforgettable adventures" />
      <meta property="og:image:alt" content="https://www.doozytrips.com/banner/21.png" />
      <meta property="og:url" content="https://www.doozytrips.com/" />
      <meta property="og:site_name" content="Doozy trip travel companion" />
      <meta property="og:type" content="article" />
      <meta property="og:locality" content="Edmonton" />
      <meta property="og:region" content="Canada" />
      <meta property="og:country_name" content="Canada" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article Meta Tags */}
      <meta name="article:section" content="Doozy trip travel companion" />
      <meta name="article:author" content="doozytrips.com" />
      <meta name="article:tag" content="travel buddy Canada, find travel buddy, group travel Canada, travel companions Canada, shared trips Canada, meet travelers Canada, join group trips, Canadian travel buddies, adventure travel Canada, budget travel companions, tour groups Canada, travel partner Canada, travel buddy site, travel buddy platform,Find Travel Buddy" />
    </Helmet>
  );
};

export default MetaDataAbout;