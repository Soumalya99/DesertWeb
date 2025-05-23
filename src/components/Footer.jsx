import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-night text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Jaisalmer Sam Desert</h3>
            <p className="mb-4">Crafting unforgettable desert experiences in Rajasthan for over 25 years. Join us for an authentic journey through the golden dunes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-desert-light transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-desert-light transition-colors duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-desert-light transition-colors duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-desert-light transition-colors duration-300"><i className="fab fa-tripadvisor"></i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-desert-light transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-desert-light transition-colors duration-300">About Us</Link></li>
              <li><Link to="/safari-packages" className="hover:text-desert-light transition-colors duration-300">Safari Packages</Link></li>
              <li><Link to="/contact" className="hover:text-desert-light transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Experiences */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Experiences</h3>
            <ul className="space-y-2">
              <li><Link to="/services/night-safari" className="hover:text-desert-light transition-colors duration-300">Night Safari</Link></li>
              <li><Link to="/services/royal-wedding" className="hover:text-desert-light transition-colors duration-300">Royal Weddings</Link></li>
              <li><Link to="/services/afghan-night" className="hover:text-desert-light transition-colors duration-300">Afghan Night</Link></li>
              <li><Link to="/services/dinner-dunes" className="hover:text-desert-light transition-colors duration-300">Dinner on Dunes</Link></li>
              <li><Link to="/services/camel-safari" className="hover:text-desert-light transition-colors duration-300">Long Camel Safari</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>Sam Sand Dunes, Jaisalmer, Rajasthan, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone-alt mt-1"></i>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope mt-1"></i>
                <span>info@jaisalmersamdesert.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Jaisalmer Sam Desert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer