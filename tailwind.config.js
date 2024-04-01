/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js}"];
export const theme = {
    extend: {
        fontFamily: {
            sans: ["Space Mono", ..._fontFamily.sans],
        },
    },
};
export const plugins = [];
