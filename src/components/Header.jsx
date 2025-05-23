import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-night">
              Jaisalmer<span className="text-desert">Sam</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/about" className="nav-link font-medium">About Us</Link>
            <Link to="/safari-packages" className="nav-link font-medium">Safari Packages</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-night hover:text-desert focus:outline-none"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="container-custom flex flex-col space-y-2">
          <Link to="/" className="nav-link py-3 border-b border-gray-200">Home</Link>
          <Link to="/about" className="nav-link py-3 border-b border-gray-200">About Us</Link>
          <Link to="/safari-packages" className="nav-link py-3 border-b border-gray-200">Safari Packages</Link>
          <Link to="/contact" className="nav-link py-3">Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header