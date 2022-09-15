import { createTheme } from "@mui/material"

const theme = createTheme({    
    typography: {
        h1: {
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 400,
            fontSize: '2.5rem'
        },
        h2: {
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 300,
            fontSize: '2rem'
        },
        h3: {
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 300,
            fontSize: '1rem'
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
                    backgroundColor: "#fff",
                    width: '30%'
                }
            }
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#fff'
                    }
                }
            },
            defaultProps: {
                disableRipple: true
            },
        }
    }
});

export default theme;