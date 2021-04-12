import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#6C63FF"
        }
    },
    typography: {
        fontFamily: "'Poppins',sans-serif",
        h1: {
            fontSize: "30px",
            color: '#333333',
            fontWeight: '600'
        },
        button: {
            textTransform: "none",
        },
    }

});

