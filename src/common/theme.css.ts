import { createGlobalTheme, createTheme, style } from '@vanilla-extract/css';

export const lightTheme = createGlobalTheme('#root', {
    colors: {
        primary: {
            500: 'rgba(35, 31, 32, 1)'
        },
        greyscale: {
            1000: 'rgba(18, 18, 18, 1)',
            900: 'rgba(0, 0, 0, 1)',
            800: 'rgba(58, 58, 58, 1)',
            700: 'rgba(77, 77, 77, 1)',
            600: 'rgba(97, 97, 97, 1)',
            500: 'rgba(117, 117, 117, 1)',
            400: 'rgba(137, 137, 137, 1)',
            300: 'rgba(156, 156, 156, 1)',
            200: 'rgba(176, 176, 176, 1)',
            100: 'rgba(196, 196, 196, 1)',
            50: 'rgba(216, 216, 216, 1)',      
            25: 'rgba(235, 235, 235, 1)',
            15: 'rgba(246, 246, 246, 1)',
            0: 'rgba(255, 255, 255, 1)',
        }
    },
    fonts: {
        
    }
})