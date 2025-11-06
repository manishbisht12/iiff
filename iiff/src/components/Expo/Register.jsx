import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ selectedPackage, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    stallNumber: '',
    peopleCount: '',
    referralCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.stallNumber || !formData.peopleCount) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register-stall', {
        ...formData,
        package: selectedPackage.title
      });

      toast.success(response.data.message || 'Registration successful!');

      // Wait for 3 seconds before closing the modal
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} pauseOnHover />

      {/* CSS in head */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 540px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          background: linear-gradient(135deg, #ff8c42 0%, #ff6b1a 100%);
          padding: 25px 30px;
          border-radius: 12px 12px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          color: white;
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-body {
          padding: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 15px;
          transition: border-color 0.3s ease;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .form-input:focus {
          outline: none;
          border-color: #ff8c42;
        }

        .form-input::placeholder {
          color: #aaa;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #ff8c42 0%, #ff6b1a 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 140, 66, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .modal-content { max-width: 100%; }
          .modal-header { padding: 20px 25px; }
          .modal-title { font-size: 19px; }
          .modal-body { padding: 25px; }
        }

        @media (max-width: 576px) {
          .modal-header { padding: 18px 20px; }
          .modal-title { font-size: 17px; }
          .modal-body { padding: 20px; }
          .form-input { padding: 12px 16px; font-size: 14px; }
          .submit-btn { padding: 14px; font-size: 16px; }
        }
      `}</style>

      {/* Modal */}
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Register In {selectedPackage.title}</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          <div className="modal-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="mobile"
                  className="form-input"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="stallNumber"
                  className="form-input"
                  placeholder="Enter stall number you want to book"
                  value={formData.stallNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="peopleCount"
                  className="form-input"
                  placeholder="Enter how many people with stall"
                  value={formData.peopleCount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="referralCode"
                  className="form-input"
                  placeholder="Referral code (optional)"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
