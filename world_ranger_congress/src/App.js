import { motion } from 'framer-motion';

// @mui
import { styled, useTheme } from '@mui/material/styles';

import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import HorizontalScroll from 'react-scroll-horizontal'
import './App.css'
import logo from "../src/image/logo.png";

// ----------------------------------------------------------------------

// Define your custom CSS variables here
const CustomCSSVariables = styled('div')({
  '--index': 'calc(1vw + 1vh)',
  '--transition': 'transform 0.75s cubic-bezier(0.075, 0.5, 0, 1)',
});

// Styled-components for main header
const MainHeader = styled(motion.header)(({ theme }) => ({
  position: 'relative',
  ' &::after': {
    content: '""',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: `calc(var(--index) * 10)`,
    backgroundImage: 'url(/images/ground.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    bottom: 'calc(var(--index) * -4.5)',
  },
}));

// Styled-components for main header
const Layers = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  position: 'relative',
}));

const Layer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  willChange: 'transform',
  zIndex: 2,
}));

// Styled-components for main header
const MainArticle = styled(motion.article)(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: 'calc(var(--index) * 1.8)',
  letterSpacing: 'calc(var(--index) / 7.5)',
  transition: 'var(--transition)',
  willChange: 'transform',
}));

// Styled-components for main header
const MainArticleHeader = styled(motion.h2)(({ theme }) => ({
  minHeight: ' 100vh',
  backgroundSize: 'cover',
  backgroundColor: 'center',
  color: ' #e7e7e0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

// Styled-components for main header
const MainLogoHeader = styled(motion.div)(({ theme }) => ({
  minHeight: ' 100vh',
  backgroundSize: 'cover',
  backgroundColor: 'center',
  color: ' #e7e7e0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
}));

// Styled-components for main header
const MainArticleParagraph = styled(motion.p)(({ theme }) => ({
  maxWidth: 'calc(var(--index) * 30)',
  fontSize: 'calc(var(--index) * 0.9)',
  marginTtop: 'calc(var(--index) / 1.25)',
  transition: 'var(--transition)',
  willChange: 'transform',
}));

// ----------------------------------------------------------------------

export default function App() {
  const carouselRef = useRef(null);

  const theme = useTheme();
  // State to keep track of vertical scroll position
  const [scrollY, setScrollY] = useState(0);

  // Function to update scrollY state when user scrolls
  const handleScroll = () => setScrollY(window.scrollY);

  // Event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const items = [
    {
      text: 'Landscapes of calcareous mountains of Provence, wetlands, Mediterranean forests, shoreline',
      imageSrc: '/images/img1.png', // Replace with your image file path
    },
    {
      text: 'Fauna, from marine wildlife to waterbirds',
      imageSrc: '/images/img2.png', // Replace with your image file path
    },
    {
      text: 'Flora, e.g. endemic underwater flowering plant Posidonia oceanica',
      imageSrc: '/images/img3.png', // Replace with your image file path
    },
    {
      text: 'Human activities, represented by the wooden pontoon.',
      imageSrc: '/images/img4.png', // Replace with your image file path
    },
  ];

  const settings = {
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 1279,
    //     settings: { slidesToShow: 3 },
    //   },
    //   {
    //     breakpoint: 959,
    //     settings: { slidesToShow: 2 },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: { slidesToShow: 1 },
    //   },
    // ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <CustomCSSVariables >
      <div className="content" style={{ willChange: 'transform' }}>
        <MainHeader>
          <Layers>
            <div
              className="layer__header"
              style={{
                transform: `translate3d(0, ${scrollY / 2}px, 0)`,
                zIndex: 1,
                willChange: 'transform',
                textTransform: 'uppercase',
                fontWeight: 900,
                color: '#e7e7e0',
                textShadow: '0 0 15px #8d6d29',
                marginBottom: '10%',
              }}
            >
              <div
                className="layers__caption"
                style={{
                  fontSize: 'calc(var(--index) / 1.175)',
                  letterSpacing: 'calc(var(--index) / 3.5)',
                }}
              >
                Welcome to World
              </div>
              <div
                className="layers__title"
                style={{
                  fontSize: 'calc(var(--index) * 2.5)',
                  letterSpacing: 'calc(var(--index) / 2.25)',
                }}
              >
                Ranger Congress
              </div>
            </div>

            {/* Base parallax layer */}
            <Layer
              className="layer layers__base"
              style={{
                backgroundImage: 'url(/images/layer-base.png)',
                transform: `translate3d(0, ${scrollY / 1.4}px, 0)`,
                zIndex: 0,
                backgroundPosition: 'top center',
              }}
            />

            {/* Middle parallax layer */}
            <Layer
              className="layer layers__middle"
              style={{
                backgroundImage: 'url(/images/layerMiddle.png)',
                transform: `translate3d(0, ${scrollY / 2.5}px, 0)`,
              }}
            />

            {/* Front parallax layer */}
            <Layer
              className="layer layers__front"
              style={{
                backgroundImage: 'url(/images/layer-front.png)',
                transform: `translate3d(0, ${scrollY / 5.7}px, 0)`,
              }}
            />
          </Layers>
        </MainHeader>

        {/* Main article */}
        <MainLogoHeader style={{ backgroundImage: 'url(/images/dungeon.jpg)' }}>
                <div className="heading">The logo of the 10th World Ranger Congress</div>
                <div className="headingAndScrollContainer">
                    <img
                        className="left-part-image"
                        src={logo}
                        alt="Left Image"
                    />
                    <HorizontalScroll className="ScrollingComponent">
                        <div className="sliding Content1"> 
                            <div className="ContentImage1" ></div>
                            <h1> Landscapes of calcareous mountains of Provence, wetlands, Mediterranean forests, shoreline; </h1>
                        </div>
                        <div className="sliding Content2"> 
                            <div className="ContentImage2" ></div>
                            <h1> Fauna, from marine wildlife to waterbirds; </h1>
                        </div>
                        <div className="sliding Content3"> 
                            <div className="ContentImage3" ></div>
                            <h1> Flora, e.g. endemic underwater flowering plant Posidonia oceanica; </h1>
                        </div>
                        <div className="sliding Content4"> 
                            <div className="ContentImage4" ></div>
                            <h1> Human activities, represented by the wooden pontoon. </h1>
                        </div>
                    </HorizontalScroll>
                
                </div>
        </MainLogoHeader>
        <MainArticleHeader className="main-article" style={{ backgroundImage: `url(/images/paris.png)` }}>
          <div className="main-article__content">
            <div
              as={MainArticleHeader}
              className="main-article__header"
              style={{
                transform: `translate3d(0, ${scrollY / 7.5}px, 0)`,
              }}
            >
              Venue
            </div>
            <div
              as={MainArticleParagraph}
              className="main-article__paragraph"
              style={{
                transform: `translate3d(0, ${scrollY / 7.5}px, 0)`,
              }}
            >
            </div>
          </div>
        </MainArticleHeader>

      </div>

    </CustomCSSVariables>
    
  );
}
