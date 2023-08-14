/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-white": "#FFFFFF",
        "main-blue": "#4682A9",
        "sub-blue": "#91C8E4",
        "etc-blue": "#749BC2",
        naver: "#03C75A",
        kakao: "#FEE500",
        google: "#FFFFFF",
      },
      gridAutoColumns: {
        "2fr": "minmax(0, 2fr)",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
