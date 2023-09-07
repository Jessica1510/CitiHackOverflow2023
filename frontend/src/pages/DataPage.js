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
    const [graph, setGraph] = useState("")

    const fetchData = async () => {
        let response = await fetch("http://localhost:8888/forecast_data/" + ticker);
        const forecast_data = await response.json();
        setGraph(forecast_data[0])
        setData(forecast_data[1]);
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
            {graph && (
                <div dangerouslySetInnerHTML={{ __html: atob(graph) }} />
            )}
        </div>
    );
};

export default DataPage;
