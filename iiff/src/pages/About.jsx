import React from 'react';
import divider from '../assets/image 50.png';
import aboutImg from '../assets/about.png';

const About = () => {
  const aboutStyle = {
    height: '400px',
    width: '100%',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const dividerImageStyle = {
    width: '200px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Banner Image */}
      <div style={aboutStyle}>
        <img src={aboutImg} alt="About Section" style={imageStyle} />
      </div>

      {/* IIFF 2025 Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 20px',
          gap: '70px',
          width: '100%',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '40px',
            width: '100%',
            maxWidth: '1320px',
          }}
        >
          {/* Title Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '20px',
              width: '239px',
              height: 'auto',
            }}
          >
            <h1
              style={{
                fontWeight: '700',
                fontSize: '55px',
                lineHeight: '65px',
                textAlign: 'center',
                color: '#000000',
                margin: 0,
              }}
            >
              IIFF 2025
            </h1>

            {/* Divider Image */}
            <img src={divider} alt="Divider" style={dividerImageStyle} />
          </div>

          {/* Content Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px 20px',
              gap: '30px',
              width: '100%',
              maxWidth: '1320px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '40px',
                gap: '20px',
                width: '100%',
                background: '#F8F8F8',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  width: '100%',
                }}
              >
                {[ // Paragraphs
                  `India International Foodpreneurship Festival (IIFF) is a unique and forward-thinking initiative to spark the spirit of innovation and entrepreneurship among the youth of India, particularly in the food sector. The primary goal of IIFF is to inspire, educate, and empower students and young professionals to explore entrepreneurial opportunities in the country's ever-evolving food ecosystem.`,
                  `This festival serves as a dynamic platform where 800 students focusing more on TIER II and TIER III cities nationwide can engage directly with various stakeholders, including successful entrepreneurs, industry experts, policymakers, investors, and representatives from multiple government bodies. Through interactive sessions, panel discussions, workshops, exhibitions, and networking events, participants will gain a deep understanding of the food sector—its challenges, emerging trends, innovations, and vast business opportunities.`,
                  `IIFF aims to raise awareness about entrepreneurship and provides structured guidance and mentorship to aspiring foodpreneurs. One of the unique aspects of this initiative is its long-term vision. The festival intends to monitor the journey of its participants beyond the event—tracking how many of them start their entrepreneurial ventures and identifying the common barriers they face in the process. This feedback mechanism will help create a more supportive and efficient entrepreneurial ecosystem in the food domain.`,
                  `The inaugural edition of the India International Foodpreneurship Festival is being organized with the valuable support of the Ministry of Skill Development and Entrepreneurship and the Ministry of Food Processing Industries, Government of India. Their involvement underlines the importance of building a robust food entrepreneurship landscape that drives economic growth and contributes to food innovation, sustainability, and employment generation in India.`,
                ].map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      fontWeight: '500',
                      fontSize: index === 2 ? '18px' : '20px',
                      lineHeight: index === 2 ? '25px' : '30px',
                      textAlign: 'center',
                      color: '#353535',
                      margin: 0,
                      width: '100%',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
