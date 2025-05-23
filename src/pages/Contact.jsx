import React from 'react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message. We will get back to you soon!')
    e.target.reset()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg")'}}>
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Get in touch to plan your unforgettable desert experience</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title">Send Us a Message</h2>
              <p className="mb-8 text-lg">Have questions about our experiences or want to make a booking? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert focus:border-transparent" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert focus:border-transparent"></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="section-title">Contact Information</h2>
              <p className="mb-8 text-lg">Our team is ready to answer any questions you might have about our desert experiences. Here's how you can reach us:</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-desert text-2xl mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Our Location</h3>
                    <p>Sam Sand Dunes, Jaisalmer<br/>Rajasthan, India - 345001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-desert text-2xl mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Email Us</h3>
                    <p>info@jaisalmersamdesert.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-desert text-2xl mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Call Us</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact