import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {createTheme, ThemeProvider} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function SimpleBottomNavigation() {
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

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%", fontFamily: "Montserrat" }}>
                <BottomNavigation
                    showLabels
                    onChange={(event) => {
                        navigate("/");
                    }}
                >
                    <BottomNavigationAction label="Home" icon={ <HomeIcon /> } />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}