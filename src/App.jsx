import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SafariPackages from './pages/SafariPackages'
import NightSafari from './pages/services/NightSafari'
import AfghanNight from './pages/services/AfghanNight'
import RoyalWedding from './pages/services/RoyalWedding'
import LuxuryCamp from './pages/services/LuxuryCamp'

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