import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {motion} from "framer-motion";
import "../index.css"
import { useState,useEffect } from "react";
import ReactLoading from "react-loading";
import {Button} from "@mui/material";
import BottomNavigation from "../components/BottomNavigation";


const DataPage = () => {
    let {ticker} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState("")
    const [graph, setGraph] = useState("")

    const fetchData = async () => {
        let response = await fetch("http://localhost:8888/forecast_data/" + ticker);
        const forecast_data = await response.json();
        setGraph(forecast_data[0])
        const firstDataItem = typeof forecast_data[1] === 'string'
            ? JSON.parse(forecast_data[1])
            : forecast_data[1];
        setData(firstDataItem[0]);
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
            {!graph && (
                <div style={{marginTop: "50px"}}>
                    <ReactLoading type={"balls"} color="#415A77" />
                </div>
            )}
            {graph && (
                <div dangerouslySetInnerHTML={{ __html: atob(graph) }} />
            )}
            {data && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        textAlign: "center",
                        fontSize: "24px",
                        alignContent: "center",
                        borderColor: "black",
                        backgroundColor: "#415A77",
                        padding: "30px",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        color: "white",
                        borderRadius: "15px"
                    }}>
                        <h4>
                            Date
                        </h4>
                        <p>
                            {data.Date}
                        </p>
                        <h4>
                            Open
                        </h4>
                        <p>
                            {data.Open}
                        </p>
                        <h4>
                            High
                        </h4>
                        <p>
                            {data.High}
                        </p>
                        <h4>
                            Low
                        </h4>
                        <p>
                            {data.Low}
                        </p>
                        <h4>
                            Close
                        </h4>
                        <p>
                            {data.Close}
                        </p>
                        <h4>
                            Volume
                        </h4>
                        <p>
                            {data.Volume}
                        </p>
                    </div>
                    <Button onClick={() => {
                        navigate(`/analysis/${ticker}`);
                    }}>
                        <p style={{fontSize: "18px"}}>
                        Get An Analysis
                        </p>
                    </Button>
                </div>
            )}
        <div className={"bottomNavigation"}>
            <BottomNavigation />
        </div>
        </div>
    );
};

export default DataPage;
