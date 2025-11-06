import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const Users = ({ darkMode }) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('You must be logged in. Please login first.');
      }

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
      setTableData(data.users || data || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = tableData.filter(item =>
    (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (item.status && item.status.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusColor = (status) => {
    if (!status) return 'status-default';
    switch(status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'pending': return 'status-pending';
      default: return 'status-default';
    }
  };

  return (
    <>
      <style>{`
        .users-table-container {
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .users-table-container.light {
          background-color: white;
        }

        .users-table-container.dark {
          background-color: #1f2937;
        }

        .users-table-header {
          padding: 24px;
          border-bottom: 1px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .users-table-header.light {
          border-color: #e5e7eb;
        }

        .users-table-header.dark {
          border-color: #374151;
        }

        .users-table-header h2 {
          font-size: 18px;
          font-weight: 600;
        }

        .users-search-container {
          position: relative;
        }

        .users-search-icon {
          position: absolute;
          left: 12px;
          top: 12px;
          color: #9ca3af;
          width: 16px;
          height: 16px;
        }

        .users-search-input {
          padding: 8px 16px 8px 40px;
          border-radius: 8px;
          border: 1px solid;
          width: 256px;
          outline: none;
        }

        .users-search-input.light {
          background-color: white;
          border-color: #d1d5db;
          color: #111827;
        }

        .users-search-input.dark {
          background-color: #374151;
          border-color: #4b5563;
          color: white;
        }

        .users-search-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .users-table-wrapper {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
        }

        .users-table thead {
          border-bottom: 1px solid;
        }

        .users-table thead.light {
          background-color: #f9fafb;
          border-color: #e5e7eb;
        }

        .users-table thead.dark {
          background-color: #374151;
          border-color: #4b5563;
        }

        .users-table th {
          padding: 12px 24px;
          text-align: left;
          font-size: 11px;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .users-table tbody tr {
          border-bottom: 1px solid;
          transition: background-color 0.2s;
        }

        .users-table tbody tr.light {
          border-color: #e5e7eb;
        }

        .users-table tbody tr.dark {
          border-color: #374151;
        }

        .users-table tbody tr:hover {
          background-color: #f9fafb;
        }

        .users-table-container.dark .users-table tbody tr:hover {
          background-color: #374151;
        }

        .users-table td {
          padding: 16px 24px;
          white-space: nowrap;
          font-size: 14px;
        }

        .users-table td:first-child {
          font-weight: 500;
        }

        .users-table td:nth-child(3) {
          color: #6b7280;
        }

        .users-status-badge {
          padding: 4px 12px;
          display: inline-flex;
          font-size: 12px;
          font-weight: 600;
          border-radius: 9999px;
        }

        .users-status-badge.status-active {
          background-color: #d1fae5;
          color: #065f46;
        }

        .users-status-badge.status-inactive {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .users-status-badge.status-pending {
          background-color: #fef3c7;
          color: #92400e;
        }

        .users-status-badge.status-default {
          background-color: #f3f4f6;
          color: #374151;
        }

        .users-loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 48px;
        }

        .users-spinner {
          border: 3px solid #f3f4f6;
          border-top: 3px solid #4f46e5;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: users-spin 1s linear infinite;
        }

        @keyframes users-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .users-error-message {
          padding: 32px 24px;
          text-align: center;
        }

        .users-error-text {
          color: #ef4444;
          margin-bottom: 16px;
        }

        .users-btn-primary {
          padding: 8px 16px;
          background-color: #4f46e5;
          color: white;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        .users-btn-primary:hover {
          background-color: #4338ca;
        }

        .users-no-results {
          padding: 32px 24px;
          text-align: center;
          color: #6b7280;
        }

        .users-table-footer {
          padding: 16px 24px;
          border-top: 1px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .users-table-footer.light {
          border-color: #e5e7eb;
        }

        .users-table-footer.dark {
          border-color: #374151;
        }

        .users-table-footer p {
          font-size: 14px;
          color: #6b7280;
        }

        .users-pagination {
          display: flex;
          gap: 8px;
        }

        .users-pagination button {
          padding: 4px 12px;
          border: 1px solid;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .users-pagination button.light {
          border-color: #d1d5db;
          background-color: white;
          color: #374151;
        }

        .users-pagination button.dark {
          border-color: #4b5563;
          background-color: transparent;
          color: white;
        }

        .users-pagination button:hover {
          background-color: #f9fafb;
        }

        .users-table-container.dark .users-pagination button:hover {
          background-color: #374151;
        }

        @media (max-width: 768px) {
          .users-search-input {
            width: 200px;
          }

          .users-table-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className={`users-table-container ${darkMode ? 'dark' : 'light'}`}>
        <div className={`users-table-header ${darkMode ? 'dark' : 'light'}`}>
          <h2>Users Data</h2>
          <div className="users-search-container">
            <FiSearch className="users-search-icon" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`users-search-input ${darkMode ? 'dark' : 'light'}`}
            />
          </div>
        </div>
        <div className="users-table-wrapper">
          {loading ? (
            <div className="users-loading-spinner">
              <div className="users-spinner"></div>
            </div>
          ) : error ? (
            <div className="users-error-message">
              <p className="users-error-text">Error: {error}</p>
              <button onClick={fetchUsers} className="users-btn-primary">
                Retry
              </button>
            </div>
          ) : (
            <table className="users-table">
              <thead className={darkMode ? 'dark' : 'light'}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((row) => (
                    <tr key={row.id || row._id} className={darkMode ? 'dark' : 'light'}>
                      <td>{row.id || row._id}</td>
                      <td>{row.name || 'N/A'}</td>
                      <td>{row.email || 'N/A'}</td>
                      <td>
                        <span className={`users-status-badge ${getStatusColor(row.status)}`}>
                          {row.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="users-no-results">
                      {searchQuery ? 'No users found matching your search' : 'No users available'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
        <div className={`users-table-footer ${darkMode ? 'dark' : 'light'}`}>
          <p>Showing {filteredData.length} of {tableData.length} users</p>
          <div className="users-pagination">
            <button className={darkMode ? 'dark' : 'light'}>Previous</button>
            <button className={darkMode ? 'dark' : 'light'}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;