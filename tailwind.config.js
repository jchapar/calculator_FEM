/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        //Theme 1 ===============
        //Backgrounds
        bgOne: 'hsl(var(--color-bg-one))',
        bgTwo: 'hsl(var(--color-bg-two))',
        bgThree: 'hsl(var(--color-bg-three))',
        //Keys
        keyOne: 'hsl(var(--color-bg-keyOne))',
        keyTwo: 'hsl(var(--color-bg-keyTwo))',
        keyThree: 'hsl(var(--color-bg-keyThree))',
        keyFour: 'hsl(var(--color-bg-keyFour))',
        keyFive: 'hsl(var(--color-bg-keyFive))',
        keySix: 'hsl(var(--color-bg-keySix))',
        //Text
        textOne: 'hsl(var(--color-text-one))',
        textHeader: 'rgb(var(--color-header-text))',
        textThree: 'hsl(var(--color-text-three))',
        //Theme 2 ===============
        /*
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
        */
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
