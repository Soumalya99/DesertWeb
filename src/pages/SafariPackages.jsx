import React from 'react'
import { Link } from 'react-router-dom'

function SafariPackages() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/12041147/pexels-photo-12041147.jpeg")'}}>
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Desert Experiences</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover the magic of the Thar Desert through our curated experiences</p>
        </div>
      </section>

      {/* Desert Safari Packages */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Desert Safari Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Night Safari */}
            <div className="service-card">
              <img src="https://media.istockphoto.com/id/1066345590/photo/camel-animal-is-sitting-on-the-sand-dune-in-a-desert-milky-way-galaxy-and-stars-in-the-sky.jpg" alt="Night Safari" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Night Safari</h3>
                <p className="mb-4">Experience the thrill of the desert after dark with our exclusive night safari. Spot nocturnal wildlife and enjoy the starlit sky.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-desert mr-2"></i>
                    <span>Duration: 2-3 hours</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users text-desert mr-2"></i>
                    <span>Group Size: Up to 6 per jeep</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tag text-desert mr-2"></i>
                    <span>From ₹2,500 per person</span>
                  </div>
                </div>
                <Link to="/services/night-safari" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
            
            {/* Afghan Night */}
            <div className="service-card">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/e7/3b/4a/rajasthani-folk-dance.jpg" alt="Afghan Night" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Afghan Night</h3>
                <p className="mb-4">A cultural evening inspired by nomadic traditions, featuring music, dance, and storytelling under the stars.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-desert mr-2"></i>
                    <span>Duration: 4-5 hours</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users text-desert mr-2"></i>
                    <span>Group Size: 10-50 people</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tag text-desert mr-2"></i>
                    <span>From ₹3,500 per person</span>
                  </div>
                </div>
                <Link to="/services/afghan-night" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
            
            {/* Long Camel Safari */}
            <div className="service-card">
              <img src="https://cdn-imgix.headout.com/media/images/c5e391093f86b9b3fe22bc7cc0a9897a-25198-dubai-evening-desert-safari-002.jpg" alt="Long Camel Safari" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Long Camel Safari</h3>
                <p className="mb-4">2 Night 3 Days adventure through the Thar Desert, exploring remote villages and camping under the stars.</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-desert mr-2"></i>
                    <span>Duration: 3 days</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users text-desert mr-2"></i>
                    <span>2-8 people</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tag text-desert mr-2"></i>
                    <span>From ₹12,000 per person</span>
                  </div>
                </div>
                <Link to="/services/camel-safari" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-sand-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Package Inclusions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Safari Inclusions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Safari Packages Include</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Professional guides</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Safety equipment</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Refreshments</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Photography opportunities</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>First aid support</span>
                </li>
              </ul>
            </div>
            
            {/* Cultural Experience Inclusions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Cultural Experiences Include</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Traditional performances</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Authentic cuisine</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Cultural activities</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Traditional attire (optional)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Local guide interpretation</span>
                </li>
              </ul>
            </div>
            
            {/* Wedding Package Inclusions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Wedding Packages Include</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Venue decoration</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Catering services</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Entertainment programs</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Accommodation arrangements</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-desert mr-2"></i>
                  <span>Wedding planning services</span>
                </li>
              </ul>
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

export default SafariPackages