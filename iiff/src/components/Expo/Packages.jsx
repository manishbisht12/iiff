import React, { useState } from 'react';
import BgImg from '../../assets/Item.b93881203042011b934a.png';
import Pavillion from '../../assets/pavilion.png';
import singlePavillion from '../../assets/singal-pavilion.png';
import megaPavillion from '../../assets/mega-pavilion.png';
import Divider from '../../assets/image 50.png';
import Register from './Register';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      image: megaPavillion,
      title: 'MEGA PAVILION',
      national: {
        area: '72 SQ.MTR',
        price: 'Rs. 5,90,000/-',
        gst: '(GST @18% extra)'
      },
      international: {
        area: '',
        price: 'USD 14,000/-',
        gst: '(GST @18% extra)'
      }
    },
    {
      id: 2,
      image: Pavillion,
      title: 'PAVILION',
      national: {
        area: '36 Sq. Mtr',
        price: 'Rs. 3,25,000/-',
        gst: '(GST @18% Extra)'
      },
      international: {
        area: '36 Sq. Mtr',
        price: 'USD 7,000/-',
        gst: '(GST @18% Extra)'
      }
    },
    {
      id: 3,
      image: megaPavillion,
      title: 'MINI PAVILION',
      national: {
        area: '28 Sq. Mtr',
        price: 'Rs. 2,50,000/-',
        gst: '(GST @18% Extra)'
      },
      international: {
        area: '28 Sq. Mtr',
        price: 'USD 5,500/-',
        gst: '(GST @18% Extra)'
      }
    },
    {
      id: 4,
      image: singlePavillion,
      title: 'DOUBLE DELUXE STALL',
      national: {
        area: '18 Sq. Mtr',
        price: 'Rs. 1,60,000/-',
        gst: '(GST @18% Extra)'
      },
      international: {
        area: '18 Sq. Mtr',
        price: 'USD 3,500/-',
        gst: '(GST @18% Extra)'
      }
    },
    {
      id: 5,
      image: singlePavillion,
      title: 'SINGLE DELUXE STALL',
      national: {
        area: '9 Sq. Mtr',
        price: 'Rs. 90,000/-',
        gst: '(GST @18% Extra)'
      },
      international: {
        area: '9 Sq. Mtr',
        price: 'USD 1,800/-',
        gst: '(GST @18% Extra)'
      }
    },
    {
      id: 6,
      image: singlePavillion,
      title: 'SMALL DELUXE STALL',
      national: {
        area: '4 Sq. Mtr',
        price: 'Rs. 40,000/-',
        gst: '(GST @18% Extra)'
      },
      international: {
        area: '4 Sq. Mtr',
        price: 'USD 850/-',
        gst: '(GST @18% Extra)'
      }
    }
  ];

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="packages-section">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .packages-section {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f8f9fa;
          padding: 60px 20px;
          min-height: 100vh;
          text-align: center;
        }

        .packages-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .title-section {
          margin-bottom: 40px;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: #000;
        }

        .divider {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .divider img {
          height: 20px;
          object-fit: contain;
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          justify-items: center;
        }

        .package-card {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 520px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
        }

        .package-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${BgImg}) center/cover;
          opacity: 0.03;
          z-index: 0;
        }

        .package-card > * {
          position: relative;
          z-index: 1;
        }

        .package-icon {
          width: 110px;
          height: 110px;
          margin-bottom: 15px;
          object-fit: contain;
        }

        .package-title {
          font-size: 18px;
          font-weight: 700;
          color: #ff8c42;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .package-details {
          width: 100%;
        }

        .detail-section {
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 6px;
        }

        .detail-text {
          font-size: 18px;
          color: #333;
          font-weight: 500;
        }

        .price {
          font-weight: 700;
          color: #000;
          margin-left: 6px;
        }

        .detail-section:nth-child(2) .detail-text {
          color: #666;
        }

        .gst {
          font-size: 15px;
          color: #888;
          margin-left: 6px;
        }

        .blurred {
          filter: blur(6px);
          pointer-events: none;
          user-select: none;
          transition: filter 0.3s ease;
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }

          .package-card {
            max-width: 100%;
          }
        }

        @media (max-width: 576px) {
          .title {
            font-size: 28px;
          }

          .package-title {
            font-size: 16px;
          }

          .package-icon {
            width: 60px;
            height: 60px;
          }

          .detail-text {
            font-size: 16px;
          }

          .gst {
            font-size: 14px;
          }
        }
      `}</style>

      {/* Wrap main content with blur effect when modal open */}
      <div className={selectedPackage ? 'blurred' : ''}>
        <div className="packages-container">
          <div className="title-section">
            <h1 className="title">Packages</h1>
            <div className="divider">
              <img src={Divider} alt="Divider" />
            </div>
          </div>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card" onClick={() => handleCardClick(pkg)}>
                <img src={pkg.image} alt={pkg.title} className="package-icon" />
                <h3 className="package-title">{pkg.title}</h3>

                <div className="package-details">
                  <div className="detail-section">
                    <p className="section-title">(NATIONAL)</p>
                    <p className="detail-text">
                      {pkg.national.area && `${pkg.national.area}.`}
                      <span className="price">{pkg.national.price}</span>
                      <span className="gst">{pkg.national.gst}</span>
                    </p>
                  </div>
                  <div className="detail-section">
                    <p className="section-title">(INTERNATIONAL)</p>
                    <p className="detail-text">
                      {pkg.international.area && `${pkg.international.area}.`}
                      <span className="gst">{pkg.international.price}</span>
                      <span className="gst">{pkg.international.gst}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPackage && (
        <Register 
          selectedPackage={selectedPackage} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default Packages;
