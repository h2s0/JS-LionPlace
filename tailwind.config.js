/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./client/**/*.html'],
  theme: {
    extend: {
      colors: {
        '--lion-black': '#000000',
        '--lion-white': '#ffffff',
        '--lion-primary': '#171f31',
        '--lion-gray-50': '#f9f9f9',
        '--lion-gray-100': '#e1e1e1',
        '--lion-gray-200': '#c4c4c4',
        '--lion-gray-300': '#a6a6a6',
        '--lion-gray-400': '#898989',
        '--lion-gray-500': '#6b6b6b',
        '--lion-gray-600': '#565656',
        '--lion-gray-700': '#404040',
        '--lion-gray-800': '#2b2b2b',
        '--lion-gray-900': '#151515',
        '--lion-blue-100': '#cce0ff',
        '--lion-blue-200': '#99c2ff',
        '--lion-blue-300': '#66a3ff',
        '--lion-blue-400': '#3385ff',
        '--lion-blue-500': '#0066ff',
        '--lion-blue-600': '#0052cc',
        '--lion-blue-700': '#003d99',
        '--lion-blue-800': '#002966',
        '--lion-blue-900': '#001433',
        '--lion-info-error': '#f03f40',
        '--lion-lightblue-100': '#e3ebfd',
        '--lion-lightblue-200': '#c6d7fc',
        '--lion-lightblue-300': '#aac4fa',
        '--lion-lightblue-400': '#8db0f9',
        '--lion-lightblue-500': '#719cf7',
        '--lion-lightblue-600': '#5a7dc6',
        '--lion-lightblue-700': '#445e94',
        '--lion-lightblue-800': '#2d3e63',
        '--lion-lightblue-900': '#171f31',
        '--lion-contents-content-primary': '#000000',
        '--lion-contents-content-secondary': '#6b6b6b',
        '--lion-contents-content-tertiary': '#a6a6a6',
      },
      fontSize: {
        '--lion-heading-medium': ['16px', '140%,', '700'],
        '--lion-heading-large': ['21.33px', '140%,', '700'],
        '--lion-heading-xl': ['28.43px', '140%,', '700'],
        '--lion-heading-xxl': ['37.9px', '140%,', '700'],
        '--lion-heading-xxxl': ['50.52px', '140%,', '700'],
        '--lion-label-small': ['12px', '150%,', '600'],
        '--lion-label-medium': ['16px', '150%,', '600'],
        '--lion-label-large': ['21.33px', '150%,', '600'],
        '--lion-label-xl': ['28.43px', '150%,', '600'],
        '--lion-label-xxl': ['37.9px', '150%,', '600'],
        '--lion-paragraph-small': ['12px', '160%,', '400'],
        '--lion-paragraph-medium': ['16px', '160%,', '400'],
        '--lion-paragraph-large': ['21.33px', '160%,', '400'],
        '--lion-paragraph-xl': ['28.43px', '160%,', '400'],
      },
      fontFamily: {
        '--lion-family': ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        '--lion-above-high-box-shadow': '0px -16px 48px 0px rgba(0, 0, 0, 0.3)',
        '--lion-above-medium-box-shadow': '0px -8px 36px 0px rgba(0, 0, 0, 0.2)',
        '--lion-above-low-box-shadow': '0px -4px 24px 0px rgba(0, 0, 0, 0.1)',
        '--lion-below-high-box-shadow': '0px 16px 48px 0px rgba(0, 0, 0, 0.3)',
        '--lion-below-medium-box-shadow': '0px 8px 36px 0px rgba(0, 0, 0, 0.2)',
        '--lion-below-low-box-shadow': '0px 4px 24px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
