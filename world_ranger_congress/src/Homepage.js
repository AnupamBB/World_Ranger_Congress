// External Packages
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './Homepage.css';

// Internal CSS
import "./styles.css";

// Internal Images
import baseLayer from "./img/layer-base.png";
import middleLayer from "./img/layer-middle.png";
// import frontLayer from "./img/layer-front.png";
// import dungeon from "./img/dungeon.jpg";
import ground from "./img/ground.png";
import paris from "./img/paris.png";

// Styled-components for main header
const MainHeader = styled.header`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 100;
    width: 100%;
    height: calc(var(--index) * 10);
    background-image: url(${ground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom: calc(var(--index) * -4.5);
  }
`;

// Styled-components for article header
const MainArticleHeader = styled.h2`
  text-transform: uppercase;
  font-size: calc(var(--index) * 1.8);
  letter-spacing: calc(var(--index) / 7.5);
  transition: var(--transition);
  will-change: transform;
`;

// Styled-components for article paragraph
const MainArticleParagraph = styled.p`
  max-width: calc(var(--index) * 30);
  font-size: calc(var(--index) * 0.9);
  margin-top: calc(var(--index) / 1.25);
  transition: var(--transition);
  will-change: transform;
`;

// Main App component
const Homepage = () => {
  // State to keep track of vertical scroll position
  const [scrollY, setScrollY] = useState(0);

  // Function to update scrollY state when user scrolls
  const handleScroll = () => setScrollY(window.scrollY);

  // Event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // JSX for App component
  return (
    <div className="wrapper">
      <div className="content">
        <MainHeader>
          <div className="layers">
            {/* Parallax layer for header */}
            <div
              className="layer__header"
              style={{
                transform: `translate3d(0, ${scrollY / 2}px, 0)`
              }}
            >
              <div className="layers__caption">Welcome to World</div>
              <div className="layers__title">Ranger Congress</div>
            </div>

            {/* Base parallax layer */}
            <div
              className="layer layers__base"
              style={{
                backgroundImage: `url(${baseLayer})`,
                transform: `translate3d(0, ${scrollY / 1.4}px, 0)`
              }}
            />

            {/* Middle parallax layer */}
            <div
              className="layer layers__middle"
              style={{
                backgroundImage: `url(${middleLayer})`,
                transform: `translate3d(0, ${scrollY / 2.5}px, 0)`
              }}
            />

            {/* Front parallax layer */}
            <div
              className="layer layers__front"
              style={{
                transform: `translate3d(0, ${scrollY / 5.7}px, 0)`
              }}
            />
          </div>
        </MainHeader>

        {/* Main article */}
        <article
          className="main-article"
        //   style={{ backgroundImage: `url(${frontLayer})` }}
        >
            <h1 className="main-article-header">The logo of the 10th Intnernational Ranger Federation (IRF)</h1>
            <h4 className="main-article-Bellowlines">Word Ranger Congress reflects the rich biodiversity of France’s South East coastline and</h4>
            <h5 className="main-article-Bellowlines">its guardians – forest and wildlife rangers.</h5>
          <div className="main-article__content">
            <div className="logo">
                
            </div>
            <div className="main-article__Textcontent">  
                <ul>
                    <h3>The logo illustrates the great diversity of the area: </h3>
                    <li>landscapes of calcareous mountains of Provence, wetlands, Mediterranean forests, shoreline;   </li>
                    <li>fauna, from marine wildlife to waterbirds;</li>
                    <li>flora, e.g. endemic underwater flowering plant Posidonia oceanica;</li>
                    <li>and human activities, represented by the wooden pontoon.</li>
                    The ranger silhouette is reminiscent of the Gardes Nature de France logo, all rangers from all over the world are represented as a symbol of the hard work and dedication towards the conservation of our natural heritage.
                The shape of the logo brings to mind the hull of a boat
                </ul>
            </div>
          </div>
        </article>
        <article
          className="main-article"
          style={{ backgroundImage: `url(${paris})` }}
        >
          <div className="main-article__content">
            <div
              as={MainArticleHeader}
              className="main-article__header"
              style={{
                transform: `translate3d(0, ${scrollY / 7.5}px, 0)`
              }}
            >
              Venue
            </div>
            <div
              as={MainArticleParagraph}
              className="main-article__paragraph"
              style={{
                transform: `translate3d(0, ${scrollY / 7.5}px, 0)`
              }}
            >
              Rangers Coming To France........
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// Export App component
export default Homepage;
