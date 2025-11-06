import React, { useState, useEffect } from 'react';
import {
  FiUsers,
  FiTrendingUp,
  FiTrendingDown
} from 'react-icons/fi';

const Dashboard = ({ darkMode = false }) => {
  const [totalUsers, setTotalUsers] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [errorUsers, setErrorUsers] = useState(null);

  const [totalExhibitors, setTotalExhibitors] = useState(null);
  const [loadingExhibitors, setLoadingExhibitors] = useState(false);
  const [errorExhibitors, setErrorExhibitors] = useState(null);

  const [availableStalls, setAvailableStalls] = useState(0);
  const [bookedStalls, setBookedStalls] = useState(0);
  const [loadingStalls, setLoadingStalls] = useState(false);
  const [errorStalls, setErrorStalls] = useState(null);

  useEffect(() => {
    fetchTotalUsers();
    fetchTotalExhibitors();
    fetchStallsSummary();
  }, []);

  const fetchTotalUsers = async () => {
    setLoadingUsers(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('You must be logged in.');

      const response = await fetch('http://localhost:5000/api/admin/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('adminToken');
          throw new Error('Authentication failed. Please login again.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTotalUsers(Array.isArray(data.users) ? data.users.length : 0);
    } catch (err) {
      setErrorUsers(err.message || 'Failed to fetch users');
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchTotalExhibitors = async () => {
    setLoadingExhibitors(true);
    try {
      const response = await fetch('http://localhost:5000/api/register-stall');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const exhibitors = data.stalls || data.exhibitors || data.data || data || [];
      setTotalExhibitors(Array.isArray(exhibitors) ? exhibitors.length : 0);
    } catch (error) {
      setErrorExhibitors(error.message || 'Failed to fetch exhibitors');
    } finally {
      setLoadingExhibitors(false);
    }
  };

  const fetchStallsSummary = async () => {
    setLoadingStalls(true);
    try {
      const response = await fetch('http://localhost:5000/api/stalls');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setAvailableStalls(data.filter((s) => s.status === 'available').length);
      setBookedStalls(data.filter((s) => s.status === 'booked').length);
    } catch (err) {
      setErrorStalls(err.message || 'Failed to fetch stalls');
    } finally {
      setLoadingStalls(false);
    }
  };

  const statsCards = [
    {
      title: 'Total Users',
      value: loadingUsers ? 'Loading...' : errorUsers ? 'Error' : totalUsers ?? '0',
      subtitle: 'Users Registered',
      icon: FiUsers,
      color: 'green'
    },
    {
      title: 'Total Exhibitors',
      value: loadingExhibitors ? 'Loading...' : errorExhibitors ? 'Error' : totalExhibitors ?? '0',
      subtitle: 'Exhibitors Registered',
      icon: FiUsers,
      color: 'green'
    },
    {
      title: 'Available Stalls',
      value: loadingStalls ? 'Loading...' : errorStalls ? 'Error' : availableStalls,
      subtitle: 'Currently Available',
      icon: FiTrendingUp,
      color: 'green'
    },
    {
      title: 'Booked Stalls',
      value: loadingStalls ? 'Loading...' : errorStalls ? 'Error' : bookedStalls,
      subtitle: 'Currently Booked',
      icon: FiTrendingDown,
      color: 'pink'
    }
  ];

  return (
    <>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .stat-card {
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .stat-card.light {
          background-color: white;
        }
        .stat-card.dark {
          background-color: #1f2937;
          color: white;
        }
        .stat-card-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .stat-info h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 8px 0;
        }
        .stat-info p:first-child {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 4px;
        }
        .stat-info p:last-child {
          font-size: 12px;
          color: #6b7280;
        }
        .stat-icon {
          padding: 12px;
          border-radius: 50%;
          font-size: 20px;
        }
        .stat-icon.green {
          background-color: #d1fae5;
          color: #10b981;
        }
        .stat-icon.pink {
          background-color: #fce7f3;
          color: #db2777;
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="stats-grid">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`stat-card ${darkMode ? 'dark' : 'light'}`}>
              <div className="stat-card-content">
                <div className="stat-info">
                  <p>{stat.title}</p>
                  <h3>{stat.value}</h3>
                  <p>{stat.subtitle}</p>
                </div>
                <div className={`stat-icon ${stat.color}`}>
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
