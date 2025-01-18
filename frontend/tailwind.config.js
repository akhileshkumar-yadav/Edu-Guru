/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
// using --force Recommended protections disabled
// http://res.cloudinary.com/dgxzvc68u/image/upload/v1734758140/yyrjoadnd2vm2nbz0pem.webp bbd
// http://res.cloudinary.com/dgxzvc68u/image/upload/v1734758215/xzoabwistpfejmybea9l.png  lu
// http://res.cloudinary.com/dgxzvc68u/image/upload/v1734758269/jwllpsruufkb25tkcsng.png rmlu