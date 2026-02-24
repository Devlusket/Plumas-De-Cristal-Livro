import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F5C045",
          foreground: "#1F1305"
        },
        secondary: {
          DEFAULT: "#FDF5E7",
          foreground: "#3B2A16"
        },
        muted: {
          DEFAULT: "#F5EFE4",
          foreground: "#6B5A45"
        },
        accent: {
          DEFAULT: "#E2D4B7",
          foreground: "#31261B"
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#F9FAFB"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 15, 15, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"]
      }
    }
  },
  plugins: []
};

export default config;

