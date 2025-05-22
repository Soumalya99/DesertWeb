/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}", "./js/**/*.js", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sand: {
          light: '#F5EEE5',
          DEFAULT: '#E6CCB2',
          dark: '#D4B594'
        },
        desert: {
          light: '#F5A623',
          DEFAULT: '#E67E22',
          dark: '#D35400'
        },
        night: {
          light: '#34495E',
          DEFAULT: '#2C3E50',
          dark: '#1A2530'
        },
        success: '#10B981',
        warning: '#FBBF24',
        error: '#EF4444'
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3330813/pexels-photo-3330813.jpeg')",
        'desert-pattern': "url('https://images.pexels.com/photos/1766835/pexels-photo-1766835.jpeg')"
      }
    },
  },
  plugins: [],
}