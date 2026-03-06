/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                skin: {
                    50: '#0F172A', // Deep Dark Blue/Gray
                    100: '#1E293B', // Darker Blue/Gray
                    200: '#334155', // Slate
                    300: '#475569',
                    800: '#94A3B8',
                    900: '#F8FAFC',
                },
                coffee: {
                    800: '#CBD5E1', // Light Slate (Text)
                    900: '#F1F5F9', // White (Headings)
                },
                gold: {
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                },
                brand: {
                    red: '#EF4444',
                    blue: '#3B82F6',
                    green: '#10B981',
                    purple: '#8B5CF6',
                    pink: '#EC4899',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'shine': 'shine 1s forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                'shine': {
                    '100%': { transform: 'translateX(200%)' },
                },
            }
        },
    },
    plugins: [],
}
