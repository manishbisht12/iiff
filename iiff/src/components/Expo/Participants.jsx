// import React, { useState, useEffect, useRef } from 'react';


// import P1 from '../../assets/p1.jpg';
// import P2 from '../../assets/p2.jpg';
// import P3 from '../../assets/p3.png';
// import P4 from '../../assets/p4.jpg';
// import P5 from '../../assets/p5.png';
// import P6 from '../../assets/p6.gif';
// import P7 from '../../assets/p7.jpg';
// import P8 from '../../assets/p8.png';
// import P9 from '../../assets/Image 1.png';
// import Divider from '../../assets/image 50.png';

// import Packages from './Packages';

// const Participants = () => {
//   const participants = [
//     { id: 1, logo: P1, name: 'Participant 1' },
//     { id: 2, logo: P2, name: 'Participant 2' },
//     { id: 3, logo: P3, name: 'Participant 3' },
//     { id: 4, logo: P4, name: 'Participant 4' },
//     { id: 5, logo: P5, name: 'Participant 5' },
//     { id: 6, logo: P6, name: 'Participant 6' },
//     { id: 7, logo: P7, name: 'Participant 7' },
//     { id: 8, logo: P8, name: 'Participant 8' },
//     { id: 9, logo: P9, name: 'Participant 9' },
//   ];

//   const totalSlides = participants.length;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const trackRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Create extended array with clones for infinite loop
//   const extendedParticipants = [
//     ...participants,
//     ...participants,
//     ...participants
//   ];

//   // Auto-scroll effect
//   useEffect(() => {
//     const startAutoScroll = () => {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => prev + 1);
//         setIsTransitioning(true);
//       }, 2500);
//     };

//     const timer = setTimeout(startAutoScroll, 100);

//     return () => {
//       clearTimeout(timer);
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   // Handle transition end for infinite loop
//   const handleTransitionEnd = () => {
//     if (currentIndex >= totalSlides * 2) {
//       setIsTransitioning(false);
//       setCurrentIndex(totalSlides);
//     } else if (currentIndex <= 0) {
//       setIsTransitioning(false);
//       setCurrentIndex(totalSlides);
//     }
//   };

//   // Apply transform
//   useEffect(() => {
//     if (!trackRef.current) return;

//     const cardWidth = trackRef.current.firstChild?.offsetWidth || 0;
//     const gap = 30;
//     const moveX = (cardWidth + gap) * currentIndex;

//     trackRef.current.style.transition = isTransitioning 
//       ? 'transform 0.6s ease-in-out' 
//       : 'none';
//     trackRef.current.style.transform = `translateX(-${moveX}px)`;
//   }, [currentIndex, isTransitioning]);

//   // Reset transition state
//   useEffect(() => {
//     if (!isTransitioning) {
//       setTimeout(() => setIsTransitioning(true), 50);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="participants-section">
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .participants-section {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           background: white;
//           padding: 60px 20px;
//           min-height: 100vh;
//         }

//         .carousel-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 40px 20px;
//         }

//         .title-section {
//           text-align: center;
//           margin-bottom: 60px;
//         }

//         .title {
//           font-size: 48px;
//           font-weight: 700;
//           color: #000;
//           margin-bottom: 20px;
//           letter-spacing: -0.5px;
//         }

//         .divider {
//           display: flex;
//           justify-content: center;
//           margin-top: 20px;
//         }

//         .divider img {
//           height: 20px;
//           object-fit: contain;
//         }

//         .carousel-wrapper {
//           position: relative;
//           overflow: hidden;
//           padding: 40px 0;
//         }

//         .carousel-track {
//           display: flex;
//           gap: 30px;
//           will-change: transform;
//         }

//         .participant-card {
//           min-width: calc((100% - 150px) / 6);
//           background: white;
//           border-radius: 20px;
//           padding: 20px 15px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//         }

        

//         .logo-image {
//           max-width: 180px;
//           max-height: 140px;
//           width: 100%;
//           margin-right:70px;
//           height: 100%;
//           object-fit: contain;
//           border-radius: 20px; /* Rounded corners - remove if not needed */
//           display: block;
//           transition: transform 0.3s ease;
//         }

//         .participant-card:hover .logo-image {
//           transform: scale(1.05);
//         }

//         .dots-container {
//           display: flex;
//           justify-content: center;
//           gap: 14px;
//           margin-top: 50px;
//         }

//         .dot {
//           width: 14px;
//           height: 14px;
//           border-radius: 50%;
//           background: #d4d4d4;
//           cursor: pointer;
//           border: 2px solid transparent;
//           transition: all 0.3s ease;
//           padding: 0;
//         }

//         .dot.active {
//           background: #ff8c42;
//           border-color: #ff8c42;
//           transform: scale(1.2);
//         }

//         .view-all-container {
//           text-align: center;
//           margin-top: 60px;
//         }

//         .view-all-btn {
//           background: #FFA500;
//           color: white;
//           border: none;
//           padding: 16px 50px;
//           font-size: 18px;
//           font-weight: 600;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
//           text-transform: capitalize;
//         }

//         .view-all-btn:hover {
//           background: #FF8C00;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 25px rgba(255, 165, 0, 0.4);
//         }

//         /* Responsive adjustments */
//         @media (max-width: 1200px) {
//           .participant-card {
//             min-width: calc((100% - 120px) / 5);
//           }

//           .logo-image {
//             max-width: 160px;
//             max-height: 160px;
//           }
//         }

//         @media (max-width: 992px) {
//           .participant-card {
//             min-width: calc((100% - 90px) / 4);
//           }
//         }

//         @media (max-width: 768px) {
//           .title {
//             font-size: 36px;
//           }

//           .participant-card {
//             min-width: calc((100% - 60px) / 3);
//             padding: 15px 10px;
//           }

//           .logo-image {
//             max-width: 140px;
//             max-height: 140px;
//           }
//         }

//         @media (max-width: 576px) {
//           .participant-card {
//             min-width: calc((100% - 30px) / 2);
//           }

//           .logo-image {
//             max-width: 120px;
//             max-height: 120px;
//           }
//         }
//       `}</style>

//       <div className="carousel-container">
//         <div className="title-section">
//           <h1 className="title">Participants</h1>
//           <div className="divider">
//             <img src={Divider} alt="Divider" />
//           </div>
//         </div>

//         <div className="carousel-wrapper">
//           <div
//             className="carousel-track"
//             ref={trackRef}
//             onTransitionEnd={handleTransitionEnd}
//           >
//             {extendedParticipants.map((participant, index) => (
//               <div key={`${participant.id}-${index}`} className="participant-card">
//                 <img
//                   src={participant.logo}
//                   alt={participant.name}
//                   className="logo-image"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dots-container">
//           {participants.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${index === (currentIndex % totalSlides) ? 'active' : ''}`}
//               onClick={() => {
//                 setCurrentIndex(totalSlides + index);
//                 setIsTransitioning(true);
//                 if (intervalRef.current) clearInterval(intervalRef.current);
//                 intervalRef.current = setInterval(() => {
//                   setCurrentIndex((prev) => prev + 1);
//                   setIsTransitioning(true);
//                 }, 2500);
//               }}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         <div className="view-all-container">
//           <button className="view-all-btn">View all</button>
//         </div>
//       </div>
//       <Packages/>
//     </div>
//   );
// };

// export default Participants;





//participant-card size 

import React, { useState, useEffect, useRef } from 'react';

import P1 from '../../assets/p1.jpg';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.png';
import P4 from '../../assets/p4.jpg';
import P5 from '../../assets/p5.png';
import P6 from '../../assets/p6.gif';
import P7 from '../../assets/p7.jpg';
import P8 from '../../assets/p8.png';
import P9 from '../../assets/Image 1.png';
import Divider from '../../assets/image 50.png';

import Packages from './Packages';

const Participants = () => {
  const participants = [
    { id: 1, logo: P1, name: 'Participant 1' },
    { id: 2, logo: P2, name: 'Participant 2' },
    { id: 3, logo: P3, name: 'Participant 3' },
    { id: 4, logo: P4, name: 'Participant 4' },
    { id: 5, logo: P5, name: 'Participant 5' },
    { id: 6, logo: P6, name: 'Participant 6' },
    { id: 7, logo: P7, name: 'Participant 7' },
    { id: 8, logo: P8, name: 'Participant 8' },
    { id: 9, logo: P9, name: 'Participant 9' },
  ];

  const totalSlides = participants.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const extendedParticipants = [...participants, ...participants, ...participants];

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
      }, 2500);
    };

    const timer = setTimeout(startAutoScroll, 100);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides * 2) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
    }
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstChild?.offsetWidth || 0;
    const gap = 30;
    const moveX = (cardWidth + gap) * currentIndex;

    trackRef.current.style.transition = isTransitioning ? 'transform 0.6s ease-in-out' : 'none';
    trackRef.current.style.transform = `translateX(-${moveX}px)`;
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  return (
    <div className="participants-section">
      <style>{`
        .participants-section {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: white;
          padding: 60px 20px;
        }

        .carousel-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .title-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .title {
          font-size: 48px;
          font-weight: bold;
        }

        .divider {
          margin-top: 15px;
        }

        .divider img {
          height: 20px;
        }

        .carousel-wrapper {
          overflow: hidden;
          padding: 40px 0;
        }

        .carousel-track {
          display: flex;
          gap: 30px;
          will-change: transform;
        }

        .participant-card {
          flex: 0 0 calc((100% - 150px) / 6); /* 6 images with 30px gap */
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .participant-card:hover {
          transform: scale(1.03);
        }

        .logo-image {
          max-width: 100%;
          max-height: 180px;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 20px; /* reduced from 40px */
          gap: 8px; /* reduced from 12px */
        }

        .dot {
          width: 8px;  /* reduced from 12px */
          height: 8px; /* reduced from 12px */
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .dot.active {
          background: #f36b0a;
          border-color: #f36b0a;
        }

        .view-all-container {
          text-align: center;
          margin-top: 30px; /* reduced from 50px */
          margin-bottom: 40px; /* added bottom margin */
        }

        .view-all-btn {
          background-color: #FFA500;
          color: white;
          border: none;
          padding: 14px 40px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background-color: #FF8C00;
        }

        @media (max-width: 1200px) {
          .participant-card {
            flex: 0 0 calc((100% - 120px) / 5);
          }
        }

        @media (max-width: 992px) {
          .participant-card {
            flex: 0 0 calc((100% - 90px) / 4);
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 36px;
          }

          .participant-card {
            flex: 0 0 calc((100% - 60px) / 3);
          }

          .logo-image {
            max-height: 140px;
          }
        }

        @media (max-width: 576px) {
          .participant-card {
            flex: 0 0 calc((100% - 30px) / 2);
          }

          .logo-image {
            max-height: 120px;
          }
        }
      `}</style>

      <div className="carousel-container">
        <div className="title-section">
          <h1 className="title">Participants</h1>
          <div className="divider">
            <img src={Divider} alt="Divider" />
          </div>
        </div>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedParticipants.map((participant, index) => (
              <div key={`${participant.id}-${index}`} className="participant-card">
                <img src={participant.logo} alt={participant.name} className="logo-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="dots-container">
          {participants.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex % totalSlides ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(totalSlides + index);
                setIsTransitioning(true);
                if (intervalRef.current) clearInterval(intervalRef.current);
                intervalRef.current = setInterval(() => {
                  setCurrentIndex((prev) => prev + 1);
                  setIsTransitioning(true);
                }, 2500);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View all</button>
        </div>
      </div>

      <Packages />
    </div>
  );
};

export default Participants;
