import React from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styled from 'styled-components';

// TODO: HARDCODED DATA FROM TEMPLATE
export const data = [
    {
        title: "What is Risk Management?",
        fact: "Risk management is a systematic process of identifying, assessing, and prioritizing potential risks to minimize their impact on an organization's objectives. It involves making informed decisions to mitigate or transfer risks."
    },
    {
        title: "Types of Risks",
        fact: "Risks in business can be categorized into various types, including operational, financial, strategic, and compliance risks. Each type requires specific strategies for effective management."
    },
    {
        title: "Risk Assessment",
        fact: "Risk assessment involves evaluating the likelihood and severity of potential risks. It helps organizations prioritize risks based on their impact and likelihood of occurrence."
    },
    {
        title: "Risk Mitigation",
        fact: "Risk mitigation aims to reduce the likelihood of a risk occurring or minimize its impact. Strategies may include implementing safety measures, diversifying investments, or using insurance."
    },
    {
        title: "Risk Transfer",
        fact: "Risk transfer involves shifting the financial burden of a risk to another party, often through insurance contracts. It helps protect organizations from significant financial losses."
    },
    {
        title: "Risk Monitoring",
        fact: "Continuous monitoring of risks is crucial. It allows organizations to stay proactive and adapt their risk management strategies as circumstances change."
    },
    {
        title: "Importance of Communication",
        fact: "Effective communication is vital in risk management. Clear communication ensures that stakeholders are aware of potential risks and the actions being taken to mitigate them."
    },
    {
        title: "Risk Management Standards",
        fact: "There are international standards and frameworks for risk management, such as ISO 31000 and COSO ERM. These provide guidelines for implementing effective risk management processes.",
    },
    {
        title: "Cybersecurity Risks",
        fact: "In the digital age, cybersecurity risks are a major concern. Protecting sensitive data and systems from cyber threats is a critical aspect of risk management."
    },
    {
        title: "Crisis Management",
        fact: "Part of risk management involves having a crisis management plan in place. This plan outlines how an organization will respond to and recover from unforeseen events or disasters."
    },
];

const Button = styled.button`
  background-color: #415a77;
  font-family: Montserrat;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 60px;
  border-radius: 15px;
  margin: 10px 0;
  cursor: pointer;
`;

export default function ResponsiveCarousel() {
    const ref = React.useRef();
    return (
        <div style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
                carouselRef={ref}
                render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 5;
                    if (parentWidth <= 1080) currentVisibleSlide = 3;
                    return (
                        <StackedCarousel
                            ref={carouselRef}
                            slideComponent={Card}
                            slideWidth={parentWidth < 800 ? parentWidth - 80 : 700}
                            carouselWidth={parentWidth}
                            data={data}
                            currentVisibleSlide={currentVisibleSlide}
                            maxVisibleSlide={5}
                            useGrabCursor
                        />
                    );
                }}
            />
            <>
                <Fab
                    style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
                    size="small"
                    onClick={() => {
                        ref.current?.goBack();
                    }}
                >
                    <ArrowBackIcon />
                </Fab>
                <Fab
                    style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
                    size="small"
                    onClick={() => {
                        ref.current?.goNext();
                    }}
                >
                    <ArrowForwardIcon />
                </Fab>
            </>
        </div>
    );
}

export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
        <div
            style={{
                width: "100%",
                height: 300,
                userSelect: "none",
            }}
            className="my-slide-component"
        >
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    backgroundColor: "#001d3d",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    padding: "20px",
                    borderRadius: "20px",
                    border: "3px",
                    borderStyle: "solid",
                    borderColor: "white"
                }}
                draggable={false}
            >
                <h3 style={{color: "white"}}>
                    {data[dataIndex]["title"]}
                </h3>
                <h6 style={{color: "white"}}>
                    {data[dataIndex]["fact"]}
                </h6>
                <Button>Find Out More</Button>
            </div>
        </div>
    );
});