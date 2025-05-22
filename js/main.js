// Initialize Hero Swiper
const heroSwiper = new Swiper('.hero-swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Initialize Testimonials Swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
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
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  
  // Toggle icon between hamburger and X
  const icon = menuToggle.querySelector('i');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    
    // Revert icon to hamburger
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Animate on scroll (simple implementation)
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .section-title');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.9) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.service-card, .section-title');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger first animation
  animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);