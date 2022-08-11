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

    
    typography: {
        h2: {
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 300,
            fontSize: '3rem'
        }
    },

    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'grey'
                }
            }
        },
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