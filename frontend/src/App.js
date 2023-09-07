import React from "react";
import "./index.css";
import "./global.css";
import SearchBar from "./components/SearchBar";
import BottomNavigation from "./components/BottomNavigation";
import Carousel from "./components/Carousel";


function App() {
    return (
        <div className={"mainContainer"}>
            <div className={"header"}>
                <h1 className={"title"}>
                    Welcome
                </h1>
                <SearchBar />
            </div>
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
