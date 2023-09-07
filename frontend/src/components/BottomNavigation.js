import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {createTheme, ThemeProvider} from "@mui/material";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const theme = createTheme({
        typography: {
            fontFamily: [
                "Montserrat",
                'Arial',
                'sans-serif',
            ].join(','),
        },
    });

    useEffect(() => {
        // This code will run after navigation
        const valueRoute = {
            0: "/",
            1: "/data/search",
            2: "/analysis/search"
        }
        navigate(valueRoute[value]);
    }, [value]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%", fontFamily: "Montserrat" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={ <HomeIcon /> } />
                    <BottomNavigationAction label="Data" icon={ <QueryStatsIcon /> } />
                    <BottomNavigationAction label="Analysis" icon={ <SummarizeIcon /> } />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}