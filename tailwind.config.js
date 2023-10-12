/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      p: {
        bb: "#3a7bfd",
        b: "#57ddff",
        p: "#c058f3",
      },
      lt: {
        vlg: "#fafafa",
        vlgb: "#e4e5f1",
        lgb: "#d2d3db",
        dgb: "#9394a5",
        vdgb: "#484b6a",
      },
      dt: {
        vdb: "#161722",
        vddb: "#25273c",
        lgb: "#cacde8",
        lgbh: "#e4e5f1",
        dgb: "#777a92",
        vdgb: {
          100: "#4d5066",
          200: "#393a4c",
        },
      },
    },
    extend: {
      boxShadow: {
        custom: "-5px 32px 37px 0px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
