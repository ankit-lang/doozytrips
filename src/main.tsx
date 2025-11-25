import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flightpage from './components/Fllight/Flightpage.tsx';
import Vacationpage from './components/vacation/Vacation.tsx';
import Tours from './components/Tours.tsx';
import Deals from './components/Deals.tsx';
import SupportPage from './components/Support.tsx';
// import AboutSection from './components/Aboutsection.tsx';
import Aboutus from './components/About.tsx';
import FooterNotesPage from './components/Footerpagenotes.tsx';
import { HelmetProvider } from 'react-helmet-async';
import Privacy from './components/Privacy.tsx';
import Blog from './components/Blogs/Blog.tsx';
import Blog1 from './components/Blogs/Blog1.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flights" element={<Flightpage />} />
         <Route path="/vacations" element={<Vacationpage />} />
         <Route path="/tours" element={<Tours />} />
          <Route path="/deals" element={<Deals />} />
              <Route path="/support" element={<SupportPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
       <Route path="/notes" element={<FooterNotesPage />} />
       <Route path="/privacy" element={<Privacy />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} />
      
        {/* Add other routes as needed */}
      </Routes>
      </BrowserRouter>
      </HelmetProvider>
    
  </StrictMode>
);
