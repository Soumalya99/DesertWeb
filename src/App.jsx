import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SafariPackages from './pages/SafariPackages.jsx'
import NightSafari from './pages/services/NightSafari.jsx'
import AfghanNight from './pages/services/AfghanNight.jsx'
import RoyalWedding from './pages/services/RoyalWedding.jsx'
import LuxuryCamp from './pages/services/LuxuryCamp.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/safari-packages" element={<SafariPackages />} />
      <Route path="/services/night-safari" element={<NightSafari />} />
      <Route path="/services/afghan-night" element={<AfghanNight />} />
      <Route path="/services/royal-wedding" element={<RoyalWedding />} />
      <Route path="/services/luxury-camp" element={<LuxuryCamp />} />
    </Routes>
  )
}

export default App