import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SearchBar from "../components/SearchBar";
import {useNavigate, useParams} from "react-router-dom";
import "../index.css"

const AnalysisPage = () => {
    let { ticker } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState("");

    const fetchData = async () => {
        const response = await fetch("http://localhost:1337/summary/" + ticker);
        const summary = await response.text();
        setData(summary);
        console.log(summary);
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
            {data && (
                <div>
                    <p>
                        {data}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AnalysisPage;
