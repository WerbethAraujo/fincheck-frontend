/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      slideUpAndFade: {
        from: { opacity: "0", transform: "translateY(2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideDownAndFade: {
        from: { opacity: "0", transform: "translateY(-2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },

      overlayShow: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      contentShow: {
        from: {
          opacity: "0",
          transform: "translate(-50%, -48%) scale(0.96)",
        },
        to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
      },
    },

    animation: {
      'slide-up-and-fade': "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      'slide-down-and-fade': "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      'overlay-show': "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      'content-show': "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  plugins: [],
}

