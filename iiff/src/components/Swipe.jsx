import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swipe.css';

import backgroundImage from '../assets/6d42cf3776d1905339f22417f1acc10722c7083a.png';
import frame13 from '../assets/Baeredygtige_baereposer_af_genbrugt_papir 1.png';
import frame14 from '../assets/session2-CSj3FiO8.png';
import frame15 from '../assets/session2-CSj3FiO8.png';
import frame16 from '../assets/image 50.png'; // Used for THEMES section

const Swipe = () => {
  const slides = [
    {
      session: 'SESSION - 1',
      title: 'Environmental packaging influences purchase decisions for food products in India.',
      speaker: 'DR. S. K. JUIKAR',
      designation: 'DEPUTY DIRECTOR',
      institute: 'INDIAN INSTITUTE OF PACKAGING, MUMBAI',
      content:
        'Environmental packaging is increasingly influencing purchase decisions for food products in India. As awareness about sustainability and climate change grows, many Indian consumers prefer food brands that use eco-friendly, biodegradable, or recyclable packaging...',
      image: frame13,
    },
    {
      session: 'SESSION - 2',
      title: 'Sustainable Food Systems & Green Foodpreneurship',
      speaker: 'Dr. C. Anandharamakrishnan',
      designation: 'Director',
      institute: 'CSIR - NIIST, Thiruvananthapuram',
      content:
        'Sustainable Food Systems & Green Foodpreneurship represent a growing movement toward environmentally responsible food production and business models...',
      image: frame14,
    },
    {
      session: 'SESSION - 3',
      title: 'Sustainable Agri-Business Development and Food Marketing Management – Opportunities & Challenges in India.',
      speaker: 'Dr. S. K. Juikar',
      designation: 'Deputy Director',
      institute: 'Indian Institute of Packaging, Mumbai',
      content:
        'Green foodpreneurs focus on reducing waste, conserving resources, and minimizing carbon emissions across the food value chain...',
      image: frame15,
    },
  ];

  return (
    <div
      className="swiper-container-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '70px 141px',
      }}
    >
      {/* THEMES Section */}
      <div className="themes-container">
        <h2 className="themes-title">THEMES OF THE</h2>
        <img src={frame16} alt="Theme Line" className="themes-image" />
      </div>

      {/* Swiper Slides */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true} // Infinite loop enabled here
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper">
              <h3 className="session fade-text">{slide.session}</h3>

              <div className="slide-content">
                <div className="left-content">
                  <h2 className="title fade-text">{slide.title}</h2>
                  <p className="speaker fade-text">
                    <span>Speaker:</span> {slide.speaker}
                  </p>
                  <p className="designation fade-text">
                    <span>Designation:</span> {slide.designation}
                  </p>
                  <p className="institute fade-text">
                    <span>Institute:</span> {slide.institute}
                  </p>
                  <p className="content">{slide.content}</p>
                </div>

                <div className="right-image">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
