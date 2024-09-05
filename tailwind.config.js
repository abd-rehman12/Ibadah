/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
       green:"#004225",
       blue:"#453F78",
       brown:"#795458",
       lightBrown:"#C08B5C",
       yellow:"#FFC94A"
     },
     spacing:{
      'topNavSpacing': '5.5 rem'
     },
     backgroundImage:{
      'bg-1':"url('./public/asstes/logo.png)"

     }
    },
  },
  plugins: [],
}

