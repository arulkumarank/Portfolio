/** @type {import('tailwindcss').Config} */

module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { 
       extend: {
         animation: {
           fadeIn: 'fadeIn 0.3s ease-in-out'
         },
         keyframes: {
           fadeIn: {
             from: { opacity: '0', transform: 'scale(0.95)' },
             to: { opacity: '1', transform: 'scale(1)' }
           }
         }
       }
     },
     plugins: [],
   }