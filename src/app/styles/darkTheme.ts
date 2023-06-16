import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({

    typography: {
        fontFamily: 'Raleway, Arial',
        fontSize: 14,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#453b3bdd',
        },
        info: {
            main: '#686565dd',
        },
        
    },

});