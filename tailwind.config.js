module.exports = {
  content: [

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        '2md' : ' -4px -3px 2px , 4px 3px 2px, 4px -3px 2px, -4px 3px 2px' 
      }

    },
  },
 
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}
