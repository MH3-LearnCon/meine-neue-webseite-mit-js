import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* shadcn/ui Farb-Tokens */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* MH3 LearnCon Brand-Farben */
        brand: {
          accent: "var(--color-accent)",
          text: "var(--color-text)",
          bg: "var(--color-bg)",
          "gray-light": "var(--color-gray-light)",
          "gray-mid-light": "var(--color-gray-mid-light)",
          "gray-mid": "var(--color-gray-mid)",
          "gray-dark": "var(--color-gray-dark)",
        },
        /* Flat-Tokens (Salvage-Kompatibilität, Design System v2) */
        "denver-blue": "var(--color-denver-blue)",
        anthracite: "var(--color-anthracite)",
        orange: "var(--color-accent)",
        "orange-hover": "var(--color-accent-hover)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      /* Montserrat via next/font – Variable wird in layout.tsx gesetzt */
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      /* Typografie-Skala – Zielgruppe 35–55 Jahre, großzügiger Zeilenabstand */
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "800" }],       // 48px
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],       // 32px
        "h2-lg": ["2.5rem", { lineHeight: "1.2" }],                   // 40px
        h3: ["1.5rem", { lineHeight: "1.3" }],                        // 24px
        "section-header": ["1.75rem", { lineHeight: "1.4", fontWeight: "500" }], // 28px
        body: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],    // 16px
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
    },
  },
  plugins: [],
} satisfies Config;
