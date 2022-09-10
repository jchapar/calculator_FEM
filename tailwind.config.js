/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
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
        textThree: 'rgb(var(--color-text-three))',
        textLight: 'rgb(var(--color-text-white))',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
