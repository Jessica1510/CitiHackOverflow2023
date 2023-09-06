import React from "react";
import "./index.css";
import "./global.css";
import SearchBar from "./components/SearchBar";
import BottomNavigation from "./components/BottomNavigation";
import Carousel from "./components/Carousel";


function App() {
    // TODO: HARDCODED
    const popularCount = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <div className={"mainContainer"}>
            <h1>
                Welcome
            </h1>
            <SearchBar />
            <h2>
                Featured
            </h2>
            <Carousel />
            <h2>
                Learn
            </h2>
            <Carousel />
            <div className={"bottomNavigation"}>
                <BottomNavigation />
            </div>
        </div>
    );
}

export default App;
