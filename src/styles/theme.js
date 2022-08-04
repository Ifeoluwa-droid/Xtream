import { createTheme } from "@mui/material";

const theme = createTheme({
    // palette: {
    //     primary: {
    //         main: 
    //     },
    //     secondary: {
    //         main: 
    //     }
    // },

    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }    
        },
        
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: "#fff"
                }
            }
        },

        MuiTab: {
            defaultProps: {
                disableRipple: true
            },
        }
    }
});

export default theme;