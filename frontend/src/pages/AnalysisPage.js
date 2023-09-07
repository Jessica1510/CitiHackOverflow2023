import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SearchBar from "../components/SearchBar";
import {useNavigate, useParams} from "react-router-dom";
import "../index.css"
import ReactLoading from "react-loading";
import BottomNavigation from "../components/BottomNavigation";

const AnalysisPage = () => {
    let { ticker } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [graph, setGraph] = useState("");
    const [insights, setInsights] = useState("");

    const fetchData = async () => {
        const sentimentResponse = await fetch("http://localhost:8888/sentiment_scores/" + ticker);
        const responseData = await sentimentResponse.json();
        // Assuming responseData is the JSON object with the "image_url" property
        setGraph(responseData.image);
        const article_insights = responseData.article_insights;
        setInsights(article_insights);

        const response = await fetch("http://localhost:8888/summary/" + ticker);
        const summary = await response.text();
        setData(summary);
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
            {!data && (
                <div>
                    <ReactLoading type={"balls"} color="#415A77" />
                </div>
            )}
            {data && (
                <div style={{padding: "20px", display: "flex", flexDirection: "column", gap: "20px", textAlign: "center"}}>
                    <h3>
                        General Summary
                    </h3>
                    <p>
                        {data}
                    </p>
                    <h3>
                        Current Sentiments
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: atob(graph) }} />
                    <h3>
                        Risk Insights
                    </h3>
                    <p>
                        {insights}
                    </p>
                </div>
            )}
        <div className={"bottomNavigation"}>
            <BottomNavigation />
        </div>
        </div>
    );
};

export default AnalysisPage;
