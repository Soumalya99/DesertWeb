import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/4132336/pexels-photo-4132336.jpeg")'}}>
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">25 years of creating unforgettable desert experiences in Jaisalmer</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg mb-6">For more than two decades, we have been crafting unforgettable experiences in the heart of the Thar Desert. Located in the serene dunes of Sam, our desert camp offers a perfect blend of Rajasthani culture, comfort, and adventure.</p>
              <p className="text-lg mb-6">Our journey began in 2000 with a simple dream – to share the authentic beauty of the Thar Desert with travelers from around the world. What started as a small family-run venture has grown into one of the most trusted names in desert tourism in Jaisalmer.</p>
              <p className="text-lg">Over the years, we've hosted thousands of guests from across the globe, helping them create memories that last a lifetime. Our deep connection to the local culture and environment ensures that every experience we offer is authentic, sustainable, and respectful of the desert's delicate ecosystem.</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/9491250/pexels-photo-9491250.jpeg" alt="Desert Sunset" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sand-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-desert text-3xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Authenticity</h3>
              <p>We pride ourselves on offering genuine Rajasthani experiences, from our traditional décor to our local cuisine and cultural performances.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-desert text-3xl mb-4">
                <i className="fas fa-hands"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Hospitality</h3>
              <p>Embody the warmth and generosity of Rajasthani culture, ensuring every guest feels welcomed and valued throughout their stay.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-desert text-3xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Sustainability</h3>
              <p>We are committed to preserving the desert's delicate ecosystem through responsible tourism practices and minimal environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-desert">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for Your Desert Adventure?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Contact us today to book your unforgettable experience in the magical dunes of Sam, Jaisalmer.</p>
          <Link to="/contact" className="bg-white text-desert hover:bg-sand-light font-bold py-3 px-6 rounded-md transition duration-300 inline-block">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default About