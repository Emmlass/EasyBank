/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        // publicsans: [
        //   "'Public Sans', sans-serif",
        //   // ...defaultTheme.fontFamily.sans,
        // ]
        publicsans: ["'Public Sans', sans-serif"],
      },
      colors: {
        primary: {
         DEFAULT: 'hsl(233, 26%, 24%)',
         limegreen: 'hsl(136, 65%, 51%)',
         brightcyan: 'hsl(192, 70%, 51%)'
        },
        neutral: {
         grayishblue: 'hsl(233, 8%, 62%)',
         verylightgray: 'hsl(0, 0%, 98%)',
         white: 'hsl(0, 0%, 100%)'
        }
       },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

