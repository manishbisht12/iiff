import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const ThankYou = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Fullscreen blurred background */
          .thanks-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          /* ✅ Card box */
          .thanks {
            width: 780px;
            height: 450px;
            background-color: #F7FAFF;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            font-family: 'Poppins', sans-serif;
            text-align: center;
          }

          .ok {
            font-size: 60px;
            color: #3AC569;
          }

          .thanks-head-msg {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .thanks-head {
            font-size: 28px;
            font-weight: 600;
            color: #3AC569;
          }

          .thanks-msg {
            font-size: 16px;
            color: #555555;
            line-height: 1.5;
          }

          .thanks-submit-button {
            margin-top: 20px;
            width: 700px;
            height: 70px;
            background-color: #F28119;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .thanks-submit-button:hover {
            background-color: #e16d05;
          }
        `}
      </style>

      <div className="thanks-overlay">
        <div className="thanks">
          <MdCheckCircle className="ok" />
          
          <div className="thanks-head-msg">
            <div className="thanks-head">Thank You for Registering!</div>
            <div className="thanks-msg">
              Your registration has been successfully received. We’re excited to have you on board for the Food Science & Technology and Innovations Conclave 2025.
            </div>
          </div>

          <button type="button" className="thanks-submit-button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
