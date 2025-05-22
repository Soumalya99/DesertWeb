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
            {/* Add more swiper slides here */}
          </div>
          <div className="swiper-pagination"></div>
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

      {/* Add more sections as needed */}
    </>
  )
}

export default Home