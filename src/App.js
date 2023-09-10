import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import WOW from 'wowjs';
import { FaAngleUp } from 'react-icons/fa';

// Components
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

// Import your page components with correct relative paths
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import HomeThree from './pages/HomeThree';
import About from './pages/About';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Donation from './pages/Donation';
import DonationList from './pages/DonationList';
import DonationDetails from './pages/DonationDetails';
import DonateNow from './pages/DonateNow';
import Events from './pages/Events';
import BlogVersionOne from './pages/BlogVersionOne';
import BlogVersionTwo from './pages/BlogVersionTwo';
import BlogSidebar from './pages/BlogSidebar';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Error from './pages/Error';

// CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation-list" element={<DonationList />} />
        <Route path="/donation-details" element={<DonationDetails />} />
        <Route path="/donate-now" element={<DonateNow />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<BlogVersionOne />} />
        <Route path="/blog-v-2" element={<BlogVersionTwo />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTop className="scrollUp" smooth top={1500} component={<FaAngleUp />} />
    </Router>
  );
}

export default App;
