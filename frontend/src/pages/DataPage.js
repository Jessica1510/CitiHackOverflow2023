import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {motion} from "framer-motion";
import "../index.css"
import { useState,useEffect } from "react";

const DataPage = () => {
    let {ticker} = useParams();
    // const navigate = useNavigate();

    const [data, setData] = useState("")

    const fetchData = async () => {
        const response = await fetch("http://localhost:8888/forecast_data/" + ticker);
        const forecast_data = await response.json();
        // setData(forecast_data);
        console.log(forecast_data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={"mainContainer"}>
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
            {/* {data && (
                <div>
                    <img src="/Stock.svg" />
                </div>
            )} */}
        </div>
    );
};

export default DataPage;
