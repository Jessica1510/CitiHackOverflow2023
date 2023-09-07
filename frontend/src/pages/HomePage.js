import {motion} from "framer-motion";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import React from "react";
import "../index.css";
import BottomNavigation from "../components/BottomNavigation";

const HomePage = () => {
    return(
        <div className={"mainContainer"}>
        <motion.div
            initial={{y: '-100%'}} // Initial position (off-screen)
            animate={{y: '0'}} // Final position (on-screen)
            transition={{duration: 0.8, ease: 'easeOut'}} // Duration of animation
            className={"header"}
        >
            <h1 className={"title"}>
                Welcome
            </h1>
            <SearchBar/>
        </motion.div>
        <motion.div
            initial={{opacity: 0}} // Initial opacity is set to 0 (fully transparent)
            animate={{opacity: 1}} // Final opacity is set to 1 (fully opaque)
            transition={{duration: 0.8}} // Duration of the fade-in animation
            style={{
                width: "100%",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <h2>
                Featured
            </h2>
            <Carousel/>
            <h2>
                Learn
            </h2>
            <Carousel/>
        </motion.div>
        <div className={"bottomNavigation"}>
            <BottomNavigation />
        </div>
    </div>
)
}

export default HomePage;