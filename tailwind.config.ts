import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
                light: 'var(--light)',
                dark: 'var(--dark)',
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1200px',
                    '2xl': '1280px',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
            },
            backgroundImage: {
                'radial-blue': 'radial-gradient(circle at center, rgba(60,130,255,0.4) 0%, rgba(60,130,255,0) 40%)',
                'radial-purple': 'radial-gradient(circle at center, rgba(180,80,220,0.4) 0%, rgba(180,80,220,0) 40%)',
                'radial-cyan': 'radial-gradient(circle at center, rgba(80,200,230,0.4) 0%, rgba(80,200,230,0) 40%)',
                'radial-red': 'radial-gradient(circle at center, rgba(180,50,50,0.4) 0%, rgba(180,50,50,0) 40%)',
                'radial-yellow': 'radial-gradient(circle at center, rgba(200,200,60,0.4) 0%, rgba(200,200,60,0) 40%)',
            },
            keyframes: {
                moveVertical: {
                    '0%': { transform: 'translateY(-50%)' },
                    '50%': { transform: 'translateY(50%)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                moveInCircle: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(180deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                moveHorizontal: {
                    '0%': { transform: 'translateX(-50%) translateY(-10%)' },
                    '50%': { transform: 'translateX(50%) translateY(10%)' },
                    '100%': { transform: 'translateX(-50%) translateY(-10%)' },
                },
            },
            animation: {
                moveVertical: 'moveVertical 30s ease infinite',
                moveInCircle: 'moveInCircle 20s linear infinite',
                moveInCircleReverse: 'moveInCircle 20s linear infinite reverse',
                moveInCircleSlow: 'moveInCircle 40s linear infinite',
                moveHorizontal: 'moveHorizontal 40s ease infinite',
            },
        },
    },
    darkMode: 'class',
    plugins: [heroui()],
}
export default config
