import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: 'white', // Label color
                    },
                    '& label.Mui-focused': {
                        color: 'white', // Label focus color
                    },
                    '& .MuiInput-underline:before': {
                        borderBottomColor: 'white', // Underline color before focus
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'white', // Underline color when input is focused
                    },
                    '& .MuiInputBase-input': {
                        color: 'white', // Text color
                    },
                },
            },
        },
        MuiButton: {
            // ... (Button styles)
        },
    },
});
