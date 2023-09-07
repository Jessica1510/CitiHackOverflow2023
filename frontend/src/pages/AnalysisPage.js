import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SearchBar from "../components/SearchBar";
import {useNavigate, useParams} from "react-router-dom";
import "../index.css"

const AnalysisPage = () => {
    let { ticker } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const fetchData = async () => {

        const sentimentResponse = await fetch("http://localhost:8888/sentiment_scores/" + ticker);
        const responseData = await sentimentResponse.json();
        // Assuming responseData is the JSON object with the "image_url" property
        const graphUrl = "http://localhost:8888" + responseData.image_url;
        const headline1 = responseData.headline1;
        const headline2 = responseData.headline2;
        const headline3 = responseData.headline3;

        const response = await fetch("http://localhost:8888/summary/" + ticker);
        const summary = await response.text();
        setData(summary);
        console.log(summary);

        setImageUrl(graphUrl)
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
            {imageUrl.length > 0 && 
            (<div>
                <img src={imageUrl} width="400" height="400"/>
            </div>)
            }
        </div>
    );
};

export default AnalysisPage;
