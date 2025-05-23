import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SafariPackages from './pages/SafariPackages.jsx'


function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App