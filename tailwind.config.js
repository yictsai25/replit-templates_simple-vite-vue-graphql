/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:["class"],

  content:[
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme:{
    container:{
      center:true,
      padding:"2rem",
      screens:{
        "2xl":"1400px",
      },
    },
    extend:{
      colors:{
        primary:{
          "50":"#eff6ff",
          "100":"#dbeafe",
          "200":"#bfdbfe",
          "300":"#93c5fd",
          "400":"#60a5fa",
          "500":"#3b82f6",
          "600":"#2563eb",
          "700":"#1d4ed8",
          "800":"#1e40af",
          "900":"#1e3a8a",
          "950":"#172554"
        }
      }
    },
  },
}
