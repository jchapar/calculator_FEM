/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        //Theme 1 ===============
        //Backgrounds
        desaturatedBlueOneBG: 'hsl(222, 26%, 31%)',
        desaturatedBlueTwoBG: 'hsl(223, 31%, 20%)',
        desaturatedBlueThreeBG: 'hsl(224, 36%, 15%)',
        //Keys
        desaturatedBlueOneKey: 'hsl(225, 21%, 49%)',
        desaturatedBlueTwoKey: 'hsl(224, 28%, 35%)',
        redOneKey: 'hsl(6, 63%, 50%)',
        redTwoKey: 'hsl(6, 70%, 34%)',
        grayishOrangeOne: 'hsl(30, 25%, 89%)',
        grayishOrangeTwo: 'hsl(28, 16%, 65%)',
        //Text
        darkGrayishBlueText: 'hsl(221, 14%, 31%)',
        light: 'hsl(0, 0, 100%)',
        //Theme 2 ===============
        //Backgrounds
        lightGray: 'hsl(0, 0%, 90%)',
        grayishRed: 'hsl(0, 5%, 81%)',
        veryLightGray: 'hsl(0, 0%, 93%)',
        //Keys
        darkCyan: 'hsl(185, 42%, 37%)',
        veryDarkCyan: 'hsl(185, 58%, 25%)',
        orange: 'hsl(25, 98%, 40%)',
        darkOrange: 'hsl(25, 99%, 27%)',
        grayishYellow: 'hsl(45, 7%, 89%)',
        darkGrayishYellow: 'hsl(35, 11%, 61%)',
        //Text
        veryDarkGrayishYellow: 'hsl(60, 10%, 19%)',
        //Theme 3 ===============
        //Backgrounds
        darkVioletBG: 'hsl(268, 75%, 9%)',
        veryDarkViolet: 'hsl(268, 71%, 12%)',
        //Keys
        darkVioletKey: 'hsl(281, 89%, 26%)',
        vividMagenta: 'hsl(285, 91%, 52%)',
        pureCyan: 'hsl(176, 100%, 44%)',
        softCyan: 'hsl(177, 92%, 70%)',
        darkVioletKey: 'hsl(268, 47%, 21%)',
        darkMagentaKey: 'hsl(290, 70%, 36%)',
        //Text
        lightYellow: 'hsl(52, 100%, 62%)',
        veryDarkBlueText: 'hsl(198, 20%, 13%)',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
