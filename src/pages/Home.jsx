import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

function Home() {
  useEffect(() => {
    // Initialize Hero Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    // Initialize Testimonials Swiper
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    })

    // Cleanup
    return () => {
      heroSwiper.destroy()
      testimonialSwiper.destroy()
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="swiper hero-swiper h-[600px]">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/2b/97/7b.jpg")'}}>
              <div className="container-custom h-full flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold mb-4">Experience the Magic of the Thar Desert</h1>
                  <p className="text-xl mb-8">Discover the golden sands of Jaisalmer with our authentic desert experiences</p>
                  <Link to="/safari-packages" className="btn-primary">Explore Packages</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Welcome to Jaisalmer Sam Desert</h2>
            <p className="text-lg mb-8">Where tradition meets adventure in the golden sands of Sam, Jaisalmer. With over 25 years of heartfelt hospitality, we invite you to unwind, explore, and immerse yourself in the authentic Rajasthani desert experience.</p>
            <Link to="/about" className="btn-primary">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 bg-sand-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Featured Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card">
              <img src="https://images.pexels.com/photos/4132336/pexels-photo-4132336.jpeg" alt="Night Safari" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Night Safari</h3>
                <p className="mb-4">Experience the thrill of the desert after dark with our exclusive night safari.</p>
                <Link to="/services/night-safari" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="service-card">
              <img src="https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg" alt="Afghan Night" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Afghan Night</h3>
                <p className="mb-4">A cultural evening inspired by nomadic traditions under the stars.</p>
                <Link to="/services/afghan-night" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="service-card">
              <img src="https://images.pexels.com/photos/3491945/pexels-photo-3491945.jpeg" alt="Royal Wedding" className="service-card-img" />
              <div className="service-card-body">
                <h3 className="text-xl font-serif font-bold mb-2">Royal Wedding</h3>
                <p className="mb-4">Create timeless memories with a magical desert wedding.</p>
                <Link to="/services/royal-wedding" className="text-desert hover:text-desert-dark font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home