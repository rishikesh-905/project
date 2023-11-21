// src/MainContent.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './MainContent.css';

import image1 from './images/poi.jpg';
import image2 from './images/opi.jpg';
import image3 from './images/iop.jpg';

const MainContent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="main-content-container">
      <Navbar />
      <Typography variant="h4" gutterBottom>

      </Typography>
      <Typography paragraph>
    
      </Typography>
      <Slider {...sliderSettings} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div>
          <img src={image1} alt="poi" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={image2} alt="opi" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={image3} alt="iop" style={{ width: '100%' }} />
        </div>
      </Slider>
      <div className="circle-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
