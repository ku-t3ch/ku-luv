import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF6191",
                secondary: "#E8E8E8",
            },
        },
    },
    plugins: [],
} satisfies Config;
