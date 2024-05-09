/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   transitionDuration: {
      "0.8s": "0.8s",
      "0.4s": "0.4s"
      
    },
    
    spacing: {
      "3rem":"3rem",
      "60px": "60px",
      nineteenrem: '19rem',
      sixrem: '6rem',
      "1rem": "1rem",
      "1200px": "1200px",
      "6rem": "6rem",
      "400px":"400px"
    },

    colors: {
      aqua:"#00FFFF",
    },
    height: {
      sixty: '60px',
      img: 'clamp(2.4rem, 2.9vh, 3.6rem)',
     
      },
  
    fontWeight: {
      sevenhundred: '700',
    },
    screens: {
      'custom': {'max': '700px'},
    },
    fontWeight: {
      "700":"700",
    },
    fontSize: {
      "21px": "21px",
      "16px": "clamp(0.9rem, 2.9vh, 16px)",
      "1.2rem":"1.2rem"
    },
    margin: {
      "19px": "19px",
      "29px": "29px"
    },
    opacity: {
      "0.9":"0.9"
    }, },
  },
  plugins: [],
}

