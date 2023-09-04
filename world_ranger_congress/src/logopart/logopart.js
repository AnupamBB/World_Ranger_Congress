import React, { useState, useEffect } from "react";
import $ from "jquery"; // Import jQuery library if not already imported
import "./logopart.css";
import logo from "../../src/img/logo.png";
import img1 from "../../src/img/img1.png";
import img2 from "../../src/img/img2.png";
import img3 from "../../src/img/img3.png";
import img4 from "../../src/img/img4.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

let lastScrollTop = 0; // Define lastScrollTop here
let e; // Define e here

function Logopart() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            text: "Landscapes of calcareous mountains of Provence, wetlands, Mediterranean forests, shoreline",
            imageSrc: img1, // Replace with your image file path
        },
        {
            text: "Fauna, from marine wildlife to waterbirds",
            imageSrc: img2, // Replace with your image file path
        },
        {
            text: "Flora, e.g. endemic underwater flowering plant Posidonia oceanica",
            imageSrc: img3, // Replace with your image file path
        },
        {
            text: "Human activities, represented by the wooden pontoon.",
            imageSrc: img4, // Replace with your image file path
        },
    ];

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
            <div className="mainContainer">
                <img
                className="left-part-image"
                src={logo}
                alt="Left Image"
            />
            <div className="road">
                
                <div className="container road1">
                    <div className="textContainer">
                        <div className="carousel-container">
                        <div className="main-article-header">The logo of the 10th Intnernational Ranger Federation (IRF)</div>
                            <div className="carousel">
                            
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${
                                            index === currentIndex
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <img
                                            className="insideImage"
                                            src={item.imageSrc}
                                            alt={`Image ${index + 1}`}
                                        />
                                        <p className="subtest">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="buttons">
                            <button className="next-button" onClick={nextItem}>
                                <KeyboardArrowLeftIcon/>
                            </button>
                            <button className="prev-button" onClick={prevItem}>
                                <KeyboardArrowRightIcon/>
                            </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logopart;
