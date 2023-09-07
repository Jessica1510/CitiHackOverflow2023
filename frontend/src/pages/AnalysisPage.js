import React from "react";
import {motion} from "framer-motion";
import SearchBar from "../components/SearchBar";
import {useNavigate, useParams} from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

const AnalysisPage = () => {
    let {ticker} = useParams();
    const navigate = useNavigate();

    // TODO: Replace this value with the actual endpoint
    // fetch('/api/endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ ticker }),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Handle response from backend
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle error
    //         console.error('Error:', error);
    //         navigate("/");
    //     });

    return (
        <div>
            <motion.div
                initial={{ y: '-100%' }} // Initial position (off-screen)
                animate={{ y: '0' }} // Final position (on-screen)
                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration of animation
                className={"header"}
            >
                <h1 className={"title"}>
                    Welcome
                </h1>
                <SearchBar />
            </motion.div>
            <div className={"bottomNavigation"}>
                <BottomNavigation />
            </div>
        </div>
    );
};

export default AnalysisPage;
