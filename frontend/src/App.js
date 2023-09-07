import React from "react";
import "./index.css";
import "./global.css";
import {Route, Routes} from 'react-router';
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import AnalysisPage from "./pages/AnalysisPage";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/data/:ticker" element={<DataPage />} />
                <Route path="/analysis/:ticker" element={<AnalysisPage />} />
            </Routes>
        </div>
    );
}

export default App;
