// // // import React, { useState } from 'react';
// // // import { 
// // //   FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiChevronDown,
// // //   FiGrid, FiUsers, FiUserCheck, FiSettings,
// // //   FiTrendingUp, FiTrendingDown, FiClock, FiActivity, FiShoppingBag,
// // // } from 'react-icons/fi';
// // // import { RiAncientPavilionLine } from 'react-icons/ri';

// // // import ExhibitorList from '../components/ExhibitorList';
// // // import Users from '../components/Users';
// // // import Stalls from '../components/Stalls';

// // // const AdminPanel = () => {
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // //   const [activeTab, setActiveTab] = useState('Dashboard');

// // //   const statsCards = [
// // //     { title: 'Sessions', value: '24k', change: '8.5%', trend: 'up', subtitle: 'New Sessions Today', icon: FiUsers, color: 'blue' },
// // //     { title: 'Avg.Sessions', value: '00:18', change: '1.5%', trend: 'up', subtitle: 'Weekly Avg.Sessions', icon: FiClock, color: 'cyan' },
// // //     { title: 'Bounce Rate', value: '$2400', change: '35%', trend: 'down', subtitle: 'Bounce Rate Weekly', icon: FiActivity, color: 'pink' },
// // //     { title: 'Goal Completions', value: '85000', change: '10.5%', trend: 'up', subtitle: 'Completions Weekly', icon: FiShoppingBag, color: 'yellow' }
// // //   ];

// // //   const menuItems = [
// // //     { icon: FiGrid, label: 'Dashboard' },
// // //     { icon: FiUsers, label: 'Users' },
// // //     { icon: FiUserCheck, label: 'Exhibitors' },
// // //     { icon: RiAncientPavilionLine, label: 'Stalls' },  // new item
// // //     { icon: FiSettings, label: 'Settings' },
// // //   ];

// // //   return (
// // //     <>
// // //       <style>{`
// // //         * {
// // //           margin: 0;
// // //           padding: 0;
// // //           box-sizing: border-box;
// // //         }
// // //         body {
// // //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
// // //           -webkit-font-smoothing: antialiased;
// // //           -moz-osx-font-smoothing: grayscale;
// // //         }
// // //         .dashboard-container {
// // //           display: flex;
// // //           height: 100vh;
// // //         }
// // //         .dashboard-container.dark {
// // //           background-color: #111827;
// // //           color: white;
// // //         }
// // //         .dashboard-container.light {
// // //           background-color: #f9fafb;
// // //           color: #111827;
// // //         }
// // //         .sidebar {
// // //           border-right: 1px solid;
// // //           transition: width 0.3s ease;
// // //           overflow-y: auto;
// // //         }
// // //         .sidebar.light {
// // //           background-color: white;
// // //           border-color: #e5e7eb;
// // //         }
// // //         .sidebar.dark {
// // //           background-color: #1f2937;
// // //           border-color: #374151;
// // //         }
// // //         .sidebar.collapsed {
// // //           width: 80px;
// // //         }
// // //         .sidebar.expanded {
// // //           width: 256px;
// // //         }
// // //         .sidebar-logo {
// // //           height: 64px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           border-bottom: 1px solid #e5e7eb;
// // //         }
// // //         .sidebar.dark .sidebar-logo {
// // //           border-color: #374151;
// // //         }
// // //         .logo-container {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //         }
// // //         .logo-icon {
// // //           width: 32px;
// // //           height: 32px;
// // //           background: linear-gradient(135deg, #6366f1 0%, #9333ea 100%);
// // //           border-radius: 8px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //         }
// // //         .logo-text {
// // //           font-weight: bold;
// // //           font-size: 20px;
// // //         }
// // //         .sidebar-nav {
// // //           padding: 16px;
// // //         }
// // //         .nav-section-title {
// // //           font-size: 11px;
// // //           color: #6b7280;
// // //           text-transform: uppercase;
// // //           margin-bottom: 8px;
// // //         }
// // //         .nav-item {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 12px;
// // //           padding: 12px;
// // //           border-radius: 8px;
// // //           margin-bottom: 4px;
// // //           cursor: pointer;
// // //           transition: all 0.2s;
// // //         }
// // //         .nav-item:hover {
// // //           background-color: #f3f4f6;
// // //         }
// // //         .sidebar.dark .nav-item:hover {
// // //           background-color: #374151;
// // //         }
// // //         .nav-item.active {
// // //           background-color: #4f46e5;
// // //           color: white;
// // //         }
// // //         .nav-item.active:hover {
// // //           background-color: #4338ca;
// // //         }
// // //         .nav-item.centered {
// // //           justify-content: center;
// // //         }
// // //         .nav-item svg {
// // //           width: 20px;
// // //           height: 20px;
// // //           flex-shrink: 0;
// // //         }
// // //         .nav-item-label {
// // //           flex: 1;
// // //           white-space: nowrap;
// // //         }
// // //         .header {
// // //           height: 64px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //           padding: 0 24px;
// // //           border-bottom: 1px solid;
// // //         }
// // //         .header.light {
// // //           background-color: white;
// // //           border-color: #e5e7eb;
// // //         }
// // //         .header.dark {
// // //           background-color: #1f2937;
// // //           border-color: #374151;
// // //         }
// // //         .header-left,
// // //         .header-right {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 16px;
// // //         }
// // //         .btn {
// // //           padding: 8px;
// // //           border-radius: 8px;
// // //           border: none;
// // //           cursor: pointer;
// // //           transition: background-color 0.2s;
// // //           background-color: transparent;
// // //         }
// // //         .btn:hover {
// // //           background-color: #f3f4f6;
// // //         }
// // //         .dashboard-container.dark .btn:hover {
// // //           background-color: #374151;
// // //         }
// // //         .btn-primary {
// // //           padding: 8px 16px;
// // //           background-color: #4f46e5;
// // //           color: white;
// // //           font-size: 14px;
// // //           font-weight: 500;
// // //           border-radius: 8px;
// // //           border: none;
// // //           cursor: pointer;
// // //         }
// // //         .btn-primary:hover {
// // //           background-color: #4338ca;
// // //         }
// // //         .search-container {
// // //           position: relative;
// // //         }
// // //         .search-icon {
// // //           position: absolute;
// // //           left: 12px;
// // //           top: 12px;
// // //           color: #9ca3af;
// // //           width: 16px;
// // //           height: 16px;
// // //         }
// // //         .search-input {
// // //           padding: 8px 16px 8px 40px;
// // //           border-radius: 8px;
// // //           border: 1px solid;
// // //           width: 256px;
// // //           outline: none;
// // //         }
// // //         .search-input.light {
// // //           background-color: white;
// // //           border-color: #d1d5db;
// // //           color: #111827;
// // //         }
// // //         .search-input.dark {
// // //           background-color: #374151;
// // //           border-color: #4b5563;
// // //           color: white;
// // //         }
// // //         .search-input:focus {
// // //           border-color: #4f46e5;
// // //           box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
// // //         }
// // //         .lang-selector {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           padding: 8px 12px;
// // //           border-radius: 8px;
// // //           cursor: pointer;
// // //         }
// // //         .lang-selector:hover {
// // //           background-color: #f3f4f6;
// // //         }
// // //         .dashboard-container.dark .lang-selector:hover {
// // //           background-color: #374151;
// // //         }
// // //         .flag-icon {
// // //           width: 20px;
// // //           height: 20px;
// // //           border-radius: 4px;
// // //         }
// // //         .notification-btn {
// // //           position: relative;
// // //         }
// // //         .notification-badge {
// // //           position: absolute;
// // //           top: 4px;
// // //           right: 4px;
// // //           width: 8px;
// // //           height: 8px;
// // //           background-color: #ef4444;
// // //           border-radius: 50%;
// // //         }
// // //         .profile-btn {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           cursor: pointer;
// // //           padding: 4px 8px;
// // //           border-radius: 8px;
// // //         }
// // //         .profile-btn:hover {
// // //           background-color: #f3f4f6;
// // //         }
// // //         .dashboard-container.dark .profile-btn:hover {
// // //           background-color: #374151;
// // //         }
// // //         .profile-avatar {
// // //           width: 32px;
// // //           height: 32px;
// // //           border-radius: 50%;
// // //           background: linear-gradient(135deg, #60a5fa 0%, #4f46e5 100%);
// // //         }
// // //         .main-content {
// // //           flex: 1;
// // //           display: flex;
// // //           flex-direction: column;
// // //           overflow: hidden;
// // //         }
// // //         .page-content {
// // //           flex: 1;
// // //           overflow-y: auto;
// // //           padding: 24px;
// // //         }
// // //         .page-content.no-padding {
// // //           padding: 0;
// // //         }
// // //         .breadcrumb {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           margin-bottom: 24px;
// // //         }
// // //         .breadcrumb h1 {
// // //           font-size: 24px;
// // //           font-weight: 600;
// // //         }
// // //         .breadcrumb-nav {
// // //           font-size: 14px;
// // //         }
// // //         .breadcrumb-nav .muted {
// // //           color: #6b7280;
// // //         }
// // //         .breadcrumb-nav .separator {
// // //           margin: 0 8px;
// // //           color: #9ca3af;
// // //         }
// // //         .stats-grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // //           gap: 16px;
// // //           margin-bottom: 24px;
// // //         }
// // //         .stat-card {
// // //           border-radius: 8px;
// // //           padding: 24px;
// // //           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// // //         }
// // //         .stat-card.light {
// // //           background-color: white;
// // //         }
// // //         .stat-card.dark {
// // //           background-color: #1f2937;
// // //         }
// // //         .stat-card-content {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: flex-start;
// // //         }
// // //         .stat-info h3 {
// // //           font-size: 24px;
// // //           font-weight: 600;
// // //           margin: 8px 0;
// // //         }
// // //         .stat-info p:first-child {
// // //           font-size: 14px;
// // //           color: #6b7280;
// // //           margin-bottom: 4px;
// // //         }
// // //         .stat-info p:last-child {
// // //           font-size: 12px;
// // //           color: #6b7280;
// // //         }
// // //         .stat-trend.up {
// // //           color: #10b981;
// // //         }
// // //         .stat-trend.down {
// // //           color: #ef4444;
// // //         }
// // //         .stat-icon {
// // //           padding: 12px;
// // //           border-radius: 50%;
// // //         }
// // //         .stat-icon.blue {
// // //           background-color: #dbeafe;
// // //           color: #2563eb;
// // //         }
// // //         .stat-icon.cyan {
// // //           background-color: #cffafe;
// // //           color: #0891b2;
// // //         }
// // //         .stat-icon.pink {
// // //           background-color: #fce7f3;
// // //           color: #db2777;
// // //         }
// // //         .stat-icon.yellow {
// // //           background-color: #fef3c7;
// // //           color: #d97706;
// // //         }
// // //         .settings-container {
// // //           border-radius: 8px;
// // //           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// // //           overflow: hidden;
// // //         }
// // //         .settings-container.light {
// // //           background-color: white;
// // //         }
// // //         .settings-container.dark {
// // //           background-color: #1f2937;
// // //         }
// // //         .settings-header {
// // //           padding: 24px;
// // //           border-bottom: 1px solid;
// // //         }
// // //         .settings-header.light {
// // //           border-color: #e5e7eb;
// // //         }
// // //         .settings-header.dark {
// // //           border-color: #374151;
// // //         }
// // //         .settings-header h2 {
// // //           font-size: 18px;
// // //           font-weight: 600;
// // //         }
// // //         .settings-content {
// // //           padding: 48px;
// // //           text-align: center;
// // //           color: #6b7280;
// // //         }
// // //         .settings-icon {
// // //           width: 64px;
// // //           height: 64px;
// // //           margin: 0 auto 16px;
// // //         }
// // //         .settings-content h3 {
// // //           margin-bottom: 8px;
// // //         }
// // //         @media (max-width: 768px) {
// // //           .stats-grid {
// // //             grid-template-columns: 1fr;
// // //           }
// // //           .search-input {
// // //             width: 200px;
// // //           }
// // //           .header-left,
// // //           .header-right {
// // //             gap: 8px;
// // //           }
// // //         }
// // //       `}</style>

// // //       <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
// // //         {/* Sidebar */}
// // //         <aside className={`sidebar ${darkMode ? 'dark' : 'light'} ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
// // //           <div className="sidebar-logo">
// // //             <div className="logo-container">
// // //               <div className="logo-icon">
// // //                 <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>D</span>
// // //               </div>
// // //               {!sidebarCollapsed && <span className="logo-text">Dastone</span>}
// // //             </div>
// // //           </div>

// // //           <div className="sidebar-nav">
// // //             {!sidebarCollapsed && <p className="nav-section-title">Navigation</p>}
// // //             {menuItems.map((item, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 className={`nav-item ${sidebarCollapsed ? 'centered' : ''} ${activeTab === item.label ? 'active' : ''}`}
// // //                 onClick={() => setActiveTab(item.label)}
// // //               >
// // //                 <item.icon />
// // //                 {!sidebarCollapsed && <span className="nav-item-label">{item.label}</span>}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </aside>

// // //         {/* Main Content */}
// // //         <div className="main-content">
// // //           {/* Header */}
// // //           <header className={`header ${darkMode ? 'dark' : 'light'}`}>
// // //             <div className="header-left">
// // //               <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="btn">
// // //                 <FiMenu style={{ width: '20px', height: '20px' }} />
// // //               </button>
// // //               <button className="btn-primary">+ New Task</button>
// // //             </div>

// // //             <div className="header-right">
// // //               <div className="search-container">
// // //                 <FiSearch className="search-icon" />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search here..."
// // //                   className={`search-input ${darkMode ? 'dark' : 'light'}`}
// // //                 />
// // //               </div>

// // //               <div className="lang-selector">
// // //                 <img src="https://flagcdn.com/w40/us.png" alt="US" className="flag-icon" />
// // //                 <FiChevronDown style={{ width: '16px', height: '16px' }} />
// // //               </div>

// // //               <button onClick={() => setDarkMode(!darkMode)} className="btn">
// // //                 {darkMode
// // //                   ? <FiSun style={{ width: '20px', height: '20px' }} />
// // //                   : <FiMoon style={{ width: '20px', height: '20px' }} />}
// // //               </button>

// // //               <button className="btn notification-btn">
// // //                 <FiBell style={{ width: '20px', height: '20px' }} />
// // //                 <span className="notification-badge"></span>
// // //               </button>

// // //               <div className="profile-btn">
// // //                 <div className="profile-avatar"></div>
// // //                 <FiChevronDown style={{ width: '16px', height: '16px' }} />
// // //               </div>
// // //             </div>
// // //           </header>

// // //           {/* Page Content */}
// // //           <main className={`page-content ${activeTab === 'Exhibitors' ? 'no-padding' : ''}`}>
// // //             {activeTab !== 'Exhibitors' && (
// // //               <div className="breadcrumb">
// // //                 <h1>{activeTab}</h1>
// // //                 <nav className="breadcrumb-nav">
// // //                   <span className="muted">Dastone</span>
// // //                   <span className="separator">→</span>
// // //                   <span>{activeTab}</span>
// // //                 </nav>
// // //               </div>
// // //             )}

// // //             {/* Dashboard View */}
// // //             {activeTab === 'Dashboard' && (
// // //               <div className="stats-grid">
// // //                 {statsCards.map((stat, idx) => {
// // //                   const Icon = stat.icon;
// // //                   return (
// // //                     <div key={idx} className={`stat-card ${darkMode ? 'dark' : 'light'}`}>
// // //                       <div className="stat-card-content">
// // //                         <div className="stat-info">
// // //                           <p>{stat.title}</p>
// // //                           <h3>{stat.value}</h3>
// // //                           <p>
// // //                             <span className={`stat-trend ${stat.trend}`}>
// // //                               {stat.trend === 'up'
// // //                                 ? <FiTrendingUp style={{ display: 'inline', width: '12px', height: '12px' }} />
// // //                                 : <FiTrendingDown style={{ display: 'inline', width: '12px', height: '12px' }} />}
// // //                               {stat.change}
// // //                             </span> {stat.subtitle}
// // //                           </p>
// // //                         </div>
// // //                         <div className={`stat-icon ${stat.color}`}>
// // //                           <Icon style={{ width: '20px', height: '20px' }} />
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             )}

// // //             {/* Users View */}
// // //             {activeTab === 'Users' && <Users darkMode={darkMode} />}

// // //             {/* Exhibitors View */}
// // //             {activeTab === 'Exhibitors' && <ExhibitorList  />}

// // //             {/* Stalls View */}
// // //             {activeTab === 'Stalls' && <Stalls darkMode={darkMode} />}

// // //             {/* Settings View */}
// // //             {activeTab === 'Settings' && (
// // //               <div className={`settings-container ${darkMode ? 'dark' : 'light'}`}>
// // //                 <div className={`settings-header ${darkMode ? 'dark' : 'light'}`}>
// // //                   <h2>Settings</h2>
// // //                 </div>
// // //                 <div className="settings-content">
// // //                   <FiSettings className="settings-icon" />
// // //                   <h3>Settings Panel</h3>
// // //                   <p>Application settings and configurations will be displayed here</p>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </main>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default AdminPanel;







// // //add settings
// // import React, { useState } from 'react';
// // import {
// //   FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiChevronDown,
// //   FiGrid, FiUsers, FiUserCheck, FiSettings,
// //   FiTrendingUp, FiTrendingDown, FiClock, FiActivity, FiShoppingBag,
// // } from 'react-icons/fi';
// // import { RiAncientPavilionLine } from 'react-icons/ri';

// // import ExhibitorList from '../components/ExhibitorList';
// // import Users from '../components/Users';
// // import Stalls from '../components/Stalls';
// // import Settings from '../components/Settings';

// // const AdminPanel = () => {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// //   const [activeTab, setActiveTab] = useState('Dashboard');

// //   const statsCards = [
// //     { title: 'Sessions', value: '24k', change: '8.5%', trend: 'up', subtitle: 'New Sessions Today', icon: FiUsers, color: 'blue' },
// //     { title: 'Avg.Sessions', value: '00:18', change: '1.5%', trend: 'up', subtitle: 'Weekly Avg.Sessions', icon: FiClock, color: 'cyan' },
// //     { title: 'Bounce Rate', value: '$2400', change: '35%', trend: 'down', subtitle: 'Bounce Rate Weekly', icon: FiActivity, color: 'pink' },
// //     { title: 'Goal Completions', value: '85000', change: '10.5%', trend: 'up', subtitle: 'Completions Weekly', icon: FiShoppingBag, color: 'yellow' }
// //   ];

// //   const menuItems = [
// //     { icon: FiGrid, label: 'Dashboard' },
// //     { icon: FiUsers, label: 'Users' },
// //     { icon: FiUserCheck, label: 'Exhibitors' },
// //     { icon: RiAncientPavilionLine, label: 'Stalls' },
// //     { icon: FiSettings, label: 'Settings' },
// //   ];

// //   return (
// //     <>
// //       <style>{`
// //         * {
// //           margin: 0;
// //           padding: 0;
// //           box-sizing: border-box;
// //         }
// //         body {
// //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
// //             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
// //           -webkit-font-smoothing: antialiased;
// //           -moz-osx-font-smoothing: grayscale;
// //         }
// //         .dashboard-container {
// //           display: flex;
// //           height: 100vh;
// //         }
// //         .dashboard-container.dark {
// //           background-color: #111827;
// //           color: white;
// //         }
// //         .dashboard-container.light {
// //           background-color: #f9fafb;
// //           color: #111827;
// //         }
// //         .sidebar {
// //           border-right: 1px solid;
// //           transition: width 0.3s ease;
// //           overflow-y: auto;
// //         }
// //         .sidebar.light {
// //           background-color: white;
// //           border-color: #e5e7eb;
// //         }
// //         .sidebar.dark {
// //           background-color: #1f2937;
// //           border-color: #374151;
// //         }
// //         .sidebar.collapsed {
// //           width: 80px;
// //         }
// //         .sidebar.expanded {
// //           width: 256px;
// //         }
// //         .sidebar-logo {
// //           height: 64px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           border-bottom: 1px solid #e5e7eb;
// //         }
// //         .sidebar.dark .sidebar-logo {
// //           border-color: #374151;
// //         }
// //         .logo-container {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }
// //         .logo-icon {
// //           width: 32px;
// //           height: 32px;
// //           background: linear-gradient(135deg, #6366f1 0%, #9333ea 100%);
// //           border-radius: 8px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }
// //         .logo-text {
// //           font-weight: bold;
// //           font-size: 20px;
// //         }
// //         .sidebar-nav {
// //           padding: 16px;
// //         }
// //         .nav-section-title {
// //           font-size: 11px;
// //           color: #6b7280;
// //           text-transform: uppercase;
// //           margin-bottom: 8px;
// //         }
// //         .nav-item {
// //           display: flex;
// //           align-items: center;
// //           gap: 12px;
// //           padding: 12px;
// //           border-radius: 8px;
// //           margin-bottom: 4px;
// //           cursor: pointer;
// //           transition: all 0.2s;
// //         }
// //         .nav-item:hover {
// //           background-color: #f3f4f6;
// //         }
// //         .sidebar.dark .nav-item:hover {
// //           background-color: #374151;
// //         }
// //         .nav-item.active {
// //           background-color: #4f46e5;
// //           color: white;
// //         }
// //         .nav-item.active:hover {
// //           background-color: #4338ca;
// //         }
// //         .nav-item.centered {
// //           justify-content: center;
// //         }
// //         .nav-item svg {
// //           width: 20px;
// //           height: 20px;
// //           flex-shrink: 0;
// //         }
// //         .nav-item-label {
// //           flex: 1;
// //           white-space: nowrap;
// //         }
// //         .header {
// //           height: 64px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           padding: 0 24px;
// //           border-bottom: 1px solid;
// //         }
// //         .header.light {
// //           background-color: white;
// //           border-color: #e5e7eb;
// //         }
// //         .header.dark {
// //           background-color: #1f2937;
// //           border-color: #374151;
// //         }
// //         .header-left,
// //         .header-right {
// //           display: flex;
// //           align-items: center;
// //           gap: 16px;
// //         }
// //         .btn {
// //           padding: 8px;
// //           border-radius: 8px;
// //           border: none;
// //           cursor: pointer;
// //           transition: background-color 0.2s;
// //           background-color: transparent;
// //         }
// //         .btn:hover {
// //           background-color: #f3f4f6;
// //         }
// //         .dashboard-container.dark .btn:hover {
// //           background-color: #374151;
// //         }
// //         .btn-primary {
// //           padding: 8px 16px;
// //           background-color: #4f46e5;
// //           color: white;
// //           font-size: 14px;
// //           font-weight: 500;
// //           border-radius: 8px;
// //           border: none;
// //           cursor: pointer;
// //         }
// //         .btn-primary:hover {
// //           background-color: #4338ca;
// //         }
// //         .search-container {
// //           position: relative;
// //         }
// //         .search-icon {
// //           position: absolute;
// //           left: 12px;
// //           top: 12px;
// //           color: #9ca3af;
// //           width: 16px;
// //           height: 16px;
// //         }
// //         .search-input {
// //           padding: 8px 16px 8px 40px;
// //           border-radius: 8px;
// //           border: 1px solid;
// //           width: 256px;
// //           outline: none;
// //         }
// //         .search-input.light {
// //           background-color: white;
// //           border-color: #d1d5db;
// //           color: #111827;
// //         }
// //         .search-input.dark {
// //           background-color: #374151;
// //           border-color: #4b5563;
// //           color: white;
// //         }
// //         .search-input:focus {
// //           border-color: #4f46e5;
// //           box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
// //         }
// //         .lang-selector {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           padding: 8px 12px;
// //           border-radius: 8px;
// //           cursor: pointer;
// //         }
// //         .lang-selector:hover {
// //           background-color: #f3f4f6;
// //         }
// //         .dashboard-container.dark .lang-selector:hover {
// //           background-color: #374151;
// //         }
// //         .flag-icon {
// //           width: 20px;
// //           height: 20px;
// //           border-radius: 4px;
// //         }
// //         .notification-btn {
// //           position: relative;
// //         }
// //         .notification-badge {
// //           position: absolute;
// //           top: 4px;
// //           right: 4px;
// //           width: 8px;
// //           height: 8px;
// //           background-color: #ef4444;
// //           border-radius: 50%;
// //         }
// //         .profile-btn {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           cursor: pointer;
// //           padding: 4px 8px;
// //           border-radius: 8px;
// //         }
// //         .profile-btn:hover {
// //           background-color: #f3f4f6;
// //         }
// //         .dashboard-container.dark .profile-btn:hover {
// //           background-color: #374151;
// //         }
// //         .profile-avatar {
// //           width: 32px;
// //           height: 32px;
// //           border-radius: 50%;
// //           background: linear-gradient(135deg, #60a5fa 0%, #4f46e5 100%);
// //         }
// //         .main-content {
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //           overflow: hidden;
// //         }
// //         .page-content {
// //           flex: 1;
// //           overflow-y: auto;
// //           padding: 24px;
// //         }
// //         .page-content.no-padding {
// //           padding: 0;
// //         }
// //         .breadcrumb {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 24px;
// //         }
// //         .breadcrumb h1 {
// //           font-size: 24px;
// //           font-weight: 600;
// //         }
// //         .breadcrumb-nav {
// //           font-size: 14px;
// //         }
// //         .breadcrumb-nav .muted {
// //           color: #6b7280;
// //         }
// //         .breadcrumb-nav .separator {
// //           margin: 0 8px;
// //           color: #9ca3af;
// //         }
// //         .stats-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //           gap: 16px;
// //           margin-bottom: 24px;
// //         }
// //         .stat-card {
// //           border-radius: 8px;
// //           padding: 24px;
// //           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// //         }
// //         .stat-card.light {
// //           background-color: white;
// //         }
// //         .stat-card.dark {
// //           background-color: #1f2937;
// //         }
// //         .stat-card-content {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: flex-start;
// //         }
// //         .stat-info h3 {
// //           font-size: 24px;
// //           font-weight: 600;
// //           margin: 8px 0;
// //         }
// //         .stat-info p:first-child {
// //           font-size: 14px;
// //           color: #6b7280;
// //           margin-bottom: 4px;
// //         }
// //         .stat-info p:last-child {
// //           font-size: 12px;
// //           color: #6b7280;
// //         }
// //         .stat-trend.up {
// //           color: #10b981;
// //         }
// //         .stat-trend.down {
// //           color: #ef4444;
// //         }
// //         .stat-icon {
// //           padding: 12px;
// //           border-radius: 50%;
// //         }
// //         .stat-icon.blue {
// //           background-color: #dbeafe;
// //           color: #2563eb;
// //         }
// //         .stat-icon.cyan {
// //           background-color: #cffafe;
// //           color: #0891b2;
// //         }
// //         .stat-icon.pink {
// //           background-color: #fce7f3;
// //           color: #db2777;
// //         }
// //         .stat-icon.yellow {
// //           background-color: #fef3c7;
// //           color: #d97706;
// //         }
// //         @media (max-width: 768px) {
// //           .stats-grid {
// //             grid-template-columns: 1fr;
// //           }
// //           .search-input {
// //             width: 200px;
// //           }
// //           .header-left,
// //           .header-right {
// //             gap: 8px;
// //           }
// //         }
// //       `}</style>

// //       <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
// //         {/* Sidebar */}
// //         <aside className={`sidebar ${darkMode ? 'dark' : 'light'} ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
// //           <div className="sidebar-logo">
// //             <div className="logo-container">
// //               <div className="logo-icon">
// //                 <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>D</span>
// //               </div>
// //               {!sidebarCollapsed && <span className="logo-text">Dastone</span>}
// //             </div>
// //           </div>

// //           <div className="sidebar-nav">
// //             {!sidebarCollapsed && <p className="nav-section-title">Navigation</p>}
// //             {menuItems.map((item, idx) => (
// //               <div
// //                 key={idx}
// //                 className={`nav-item ${sidebarCollapsed ? 'centered' : ''} ${activeTab === item.label ? 'active' : ''}`}
// //                 onClick={() => setActiveTab(item.label)}
// //               >
// //                 <item.icon />
// //                 {!sidebarCollapsed && <span className="nav-item-label">{item.label}</span>}
// //               </div>
// //             ))}
// //           </div>
// //         </aside>

// //         {/* Main Content */}
// //         <div className="main-content">
// //           {/* Header */}
// //           <header className={`header ${darkMode ? 'dark' : 'light'}`}>
// //             <div className="header-left">
// //               <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="btn">
// //                 <FiMenu />
// //               </button>
// //               <button className="btn-primary">+ New Task</button>
// //             </div>

// //             <div className="header-right">
// //               <div className="search-container">
// //                 <FiSearch className="search-icon" />
// //                 <input
// //                   type="text"
// //                   placeholder="Search here..."
// //                   className={`search-input ${darkMode ? 'dark' : 'light'}`}
// //                 />
// //               </div>

// //               <div className="lang-selector">
// //                 <img src="https://flagcdn.com/w40/us.png" alt="US" className="flag-icon" />
// //                 <FiChevronDown />
// //               </div>

// //               <button onClick={() => setDarkMode(!darkMode)} className="btn">
// //                 {darkMode ? <FiSun /> : <FiMoon />}
// //               </button>

// //               <button className="btn notification-btn">
// //                 <FiBell />
// //                 <span className="notification-badge"></span>
// //               </button>

// //               <div className="profile-btn">
// //                 <div className="profile-avatar"></div>
// //                 <FiChevronDown />
// //               </div>
// //             </div>
// //           </header>

// //           {/* Page Content */}
// //           <main className={`page-content ${activeTab === 'Exhibitors' ? 'no-padding' : ''}`}>
// //             {activeTab !== 'Exhibitors' && (
// //               <div className="breadcrumb">
// //                 <h1>{activeTab}</h1>
// //                 <nav className="breadcrumb-nav">
// //                   <span className="muted">Dastone</span>
// //                   <span className="separator">→</span>
// //                   <span>{activeTab}</span>
// //                 </nav>
// //               </div>
// //             )}

// //             {/* Views */}
// //             {activeTab === 'Dashboard' && (
// //               <div className="stats-grid">
// //                 {statsCards.map((stat, idx) => {
// //                   const Icon = stat.icon;
// //                   return (
// //                     <div key={idx} className={`stat-card ${darkMode ? 'dark' : 'light'}`}>
// //                       <div className="stat-card-content">
// //                         <div className="stat-info">
// //                           <p>{stat.title}</p>
// //                           <h3>{stat.value}</h3>
// //                           <p>
// //                             <span className={`stat-trend ${stat.trend}`}>
// //                               {stat.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
// //                               {stat.change}
// //                             </span> {stat.subtitle}
// //                           </p>
// //                         </div>
// //                         <div className={`stat-icon ${stat.color}`}>
// //                           <Icon />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             )}

// //             {activeTab === 'Users' && <Users darkMode={darkMode} />}
// //             {activeTab === 'Exhibitors' && <ExhibitorList />}
// //             {activeTab === 'Stalls' && <Stalls darkMode={darkMode} />}
// //             {activeTab === 'Settings' && <Settings darkMode={darkMode} />}
// //           </main>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default AdminPanel;





// import React, { useState } from 'react';
// import {
//   FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiChevronDown,
//   FiGrid, FiUsers, FiUserCheck, FiSettings,
//   FiClock, FiActivity, FiShoppingBag, // ensure you import any icon used elsewhere
//   FiTrendingUp, FiTrendingDown
// } from 'react-icons/fi';
// import { RiAncientPavilionLine } from 'react-icons/ri';

// import Dashboard from '../components/Dashboard';
// import ExhibitorList from '../components/ExhibitorList';
// import Users from '../components/Users';
// import Stalls from '../components/Stalls';
// import Settings from '../components/Settings/Settings';

// const AdminPanel = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState('Dashboard');

//   const menuItems = [
//     { icon: FiGrid, label: 'Dashboard' },
//     { icon: FiUsers, label: 'Users' },
//     { icon: FiUserCheck, label: 'Exhibitors' },
//     { icon: RiAncientPavilionLine, label: 'Stalls' },
//     { icon: FiSettings, label: 'Settings' },
//   ];

//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }
//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
//         .dashboard-container {
//           display: flex;
//           height: 100vh;
//         }
//         .dashboard-container.dark {
//           background-color: #111827;
//           color: white;
//         }
//         .dashboard-container.light {
//           background-color: #f9fafb;
//           color: #111827;
//         }
//         .sidebar {
//           border-right: 1px solid;
//           transition: width 0.3s ease;
//           overflow-y: auto;
//         }
//         .sidebar.light {
//           background-color: white;
//           border-color: #e5e7eb;
//         }
//         .sidebar.dark {
//           background-color: #1f2937;
//           border-color: #374151;
//         }
//         .sidebar.collapsed {
//           width: 80px;
//         }
//         .sidebar.expanded {
//           width: 256px;
//         }
//         .sidebar-logo {
//           height: 64px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-bottom: 1px solid #e5e7eb;
//         }
//         .sidebar.dark .sidebar-logo {
//           border-color: #374151;
//         }
//         .logo-container {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .logo-icon {
//           width: 32px;
//           height: 32px;
//           background: linear-gradient(135deg, #6366f1 0%, #9333ea 100%);
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .logo-text {
//           font-weight: bold;
//           font-size: 20px;
//         }
//         .sidebar-nav {
//           padding: 16px;
//         }
//         .nav-section-title {
//           font-size: 11px;
//           color: #6b7280;
//           text-transform: uppercase;
//           margin-bottom: 8px;
//         }
//         .nav-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px;
//           border-radius: 8px;
//           margin-bottom: 4px;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
//         .nav-item:hover {
//           background-color: #f3f4f6;
//         }
//         .sidebar.dark .nav-item:hover {
//           background-color: #374151;
//         }
//         .nav-item.active {
//           background-color: #4f46e5;
//           color: white;
//         }
//         .nav-item.active:hover {
//           background-color: #4338ca;
//         }
//         .nav-item.centered {
//           justify-content: center;
//         }
//         .nav-item svg {
//           width: 20px;
//           height: 20px;
//           flex-shrink: 0;
//         }
//         .nav-item-label {
//           flex: 1;
//           white-space: nowrap;
//         }
//         .header {
//           height: 64px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 24px;
//           border-bottom: 1px solid;
//         }
//         .header.light {
//           background-color: white;
//           border-color: #e5e7eb;
//         }
//         .header.dark {
//           background-color: #1f2937;
//           border-color: #374151;
//         }
//         .header-left,
//         .header-right {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }
//         .btn {
//           padding: 8px;
//           border-radius: 8px;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.2s;
//           background-color: transparent;
//         }
//         .btn:hover {
//           background-color: #f3f4f6;
//         }
//         .dashboard-container.dark .btn:hover {
//           background-color: #374151;
//         }
//         .btn-primary {
//           padding: 8px 16px;
//           background-color: #4f46e5;
//           color: white;
//           font-size: 14px;
//           font-weight: 500;
//           border-radius: 8px;
//           border: none;
//           cursor: pointer;
//         }
//         .btn-primary:hover {
//           background-color: #4338ca;
//         }
//         .search-container {
//           position: relative;
//         }
//         .search-icon {
//           position: absolute;
//           left: 12px;
//           top: 12px;
//           color: #9ca3af;
//           width: 16px;
//           height: 16px;
//         }
//         .search-input {
//           padding: 8px 16px 8px 40px;
//           border-radius: 8px;
//           border: 1px solid;
//           width: 256px;
//           outline: none;
//         }
//         .search-input.light {
//           background-color: white;
//           border-color: #d1d5db;
//           color: #111827;
//         }
//         .search-input.dark {
//           background-color: #374151;
//           border-color: #4b5563;
//           color: white;
//         }
//         .search-input:focus {
//           border-color: #4f46e5;
//           box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
//         }
//         .lang-selector {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 12px;
//           border-radius: 8px;
//           cursor: pointer;
//         }
//         .lang-selector:hover {
//           background-color: #f3f4f6;
//         }
//         .dashboard-container.dark .lang-selector:hover {
//           background-color: #374151;
//         }
//         .flag-icon {
//           width: 20px;
//           height: 20px;
//           border-radius: 4px;
//         }
//         .notification-btn {
//           position: relative;
//         }
//         .notification-badge {
//           position: absolute;
//           top: 4px;
//           right: 4px;
//           width: 8px;
//           height: 8px;
//           background-color: #ef4444;
//           border-radius: 50%;
//         }
//         .profile-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           cursor: pointer;
//           padding: 4px 8px;
//           border-radius: 8px;
//         }
//         .profile-btn:hover {
//           background-color: #f3f4f6;
//         }
//         .dashboard-container.dark .profile-btn:hover {
//           background-color: #374151;
//         }
//         .profile-avatar {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #60a5fa 0%, #4f46e5 100%);
//         }
//         .main-content {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//         }
//         .page-content {
//           flex: 1;
//           overflow-y: auto;
//           padding: 24px;
//         }
//         .page-content.no-padding {
//           padding: 0;
//         }
//         .breadcrumb {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 24px;
//         }
//         .breadcrumb h1 {
//           font-size: 24px;
//           font-weight: 600;
//         }
//         .breadcrumb-nav {
//           font-size: 14px;
//         }
//         .breadcrumb-nav .muted {
//           color: #6b7280;
//         }
//         .breadcrumb-nav .separator {
//           margin: 0 8px;
//           color: #9ca3af;
//         }
//         @media (max-width: 768px) {
//           .search-input {
//             width: 200px;
//           }
//           .header-left,
//           .header-right {
//             gap: 8px;
//           }
//         }
//       `}</style>

//       <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
//         {/* Sidebar */}
//         <aside className={`sidebar ${darkMode ? 'dark' : 'light'} ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
//           <div className="sidebar-logo">
//             <div className="logo-container">
//               <div className="logo-icon">
//                 <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>D</span>
//               </div>
//               {!sidebarCollapsed && <span className="logo-text">Dastone</span>}
//             </div>
//           </div>

//           <div className="sidebar-nav">
//             {!sidebarCollapsed && <p className="nav-section-title">Navigation</p>}
//             {menuItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`nav-item ${sidebarCollapsed ? 'centered' : ''} ${activeTab === item.label ? 'active' : ''}`}
//                 onClick={() => setActiveTab(item.label)}
//               >
//                 <item.icon />
//                 {!sidebarCollapsed && <span className="nav-item-label">{item.label}</span>}
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="main-content">
//           {/* Header */}
//           <header className={`header ${darkMode ? 'dark' : 'light'}`}>
//             <div className="header-left">
//               <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="btn">
//                 <FiMenu />
//               </button>
//               <button className="btn-primary">+ New Task</button>
//             </div>

//             <div className="header-right">
//               <div className="search-container">
//                 <FiSearch className="search-icon" />
//                 <input
//                   type="text"
//                   placeholder="Search here..."
//                   className={`search-input ${darkMode ? 'dark' : 'light'}`}
//                 />
//               </div>

//               <div className="lang-selector">
//                 <img src="https://flagcdn.com/w40/us.png" alt="US" className="flag-icon" />
//                 <FiChevronDown />
//               </div>

//               <button onClick={() => setDarkMode(!darkMode)} className="btn">
//                 {darkMode ? <FiSun /> : <FiMoon />}
//               </button>

//               <button className="btn notification-btn">
//                 <FiBell />
//                 <span className="notification-badge"></span>
//               </button>

//               <div className="profile-btn">
//                 <div className="profile-avatar"></div>
//                 <FiChevronDown />
//               </div>
//             </div>
//           </header>

//           {/* Page Content */}
//           <main className={`page-content ${activeTab === 'Exhibitors' ? 'no-padding' : ''}`}>
//             {activeTab !== 'Exhibitors' && (
//               <div className="breadcrumb">
//                 <h1>{activeTab}</h1>
//                 <nav className="breadcrumb-nav">
//                   <span className="muted">Dastone</span>
//                   <span className="separator">→</span>
//                   <span>{activeTab}</span>
//                 </nav>
//               </div>
//             )}

//             {activeTab === 'Dashboard' && <Dashboard darkMode={darkMode} />}
//             {activeTab === 'Users' && <Users darkMode={darkMode} />}
//             {activeTab === 'Exhibitors' && <ExhibitorList />}
//             {activeTab === 'Stalls' && <Stalls darkMode={darkMode} />}
//             {activeTab === 'Settings' && <Settings darkMode={darkMode} />}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminPanel;





//add logout
  import React, { useState } from 'react';
import {
  FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiChevronDown,
  FiGrid, FiUsers, FiUserCheck, FiSettings
} from 'react-icons/fi';
import { RiAncientPavilionLine } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import ExhibitorList from '../components/ExhibitorList';
import Users from '../components/Users';
import Stalls from '../components/Stalls';
import Settings from '../components/Settings/Settings';

const AdminPanel = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { icon: FiGrid, label: 'Dashboard' },
    { icon: FiUsers, label: 'Users' },
    { icon: FiUserCheck, label: 'Exhibitors' },
    { icon: RiAncientPavilionLine, label: 'Stalls' },
    { icon: FiSettings, label: 'Settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .dashboard-container {
          display: flex;
          height: 100vh;
        }
        .dashboard-container.dark {
          background-color: #111827;
          color: white;
        }
        .dashboard-container.light {
          background-color: #f9fafb;
          color: #111827;
        }
        .sidebar {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: width 0.3s ease;
          overflow-y: auto;
        }
        .sidebar.light {
          background-color: white;
          border-right: 1px solid #e5e7eb;
        }
        .sidebar.dark {
          background-color: #1f2937;
          border-right: 1px solid #374151;
        }
        .sidebar.collapsed {
          width: 80px;
        }
        .sidebar.expanded {
          width: 256px;
        }
        .sidebar-logo {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #e5e7eb;
        }
        .sidebar.dark .sidebar-logo {
          border-color: #374151;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #6366f1 0%, #9333ea 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-text {
          font-weight: bold;
          font-size: 20px;
        }
        .sidebar-nav {
          padding: 16px;
        }
        .nav-section-title {
          font-size: 11px;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-item:hover {
          background-color: #f3f4f6;
        }
        .sidebar.dark .nav-item:hover {
          background-color: #374151;
        }
        .nav-item.active {
          background-color: #4f46e5;
          color: white;
        }
        .nav-item.active:hover {
          background-color: #4338ca;
        }
        .nav-item.centered {
          justify-content: center;
        }
        .nav-item svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .nav-item-label {
          flex: 1;
          white-space: nowrap;
        }
        .header {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          border-bottom: 1px solid;
        }
        .header.light {
          background-color: white;
          border-color: #e5e7eb;
        }
        .header.dark {
          background-color: #1f2937;
          border-color: #374151;
        }
        .header-left,
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn {
          padding: 8px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          background-color: transparent;
        }
        .btn:hover {
          background-color: #f3f4f6;
        }
        .dashboard-container.dark .btn:hover {
          background-color: #374151;
        }
      
        .search-container {
          position: relative;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          top: 12px;
          color: #9ca3af;
          width: 16px;
          height: 16px;
        }
        .search-input {
          padding: 8px 16px 8px 40px;
          border-radius: 8px;
          border: 1px solid;
          width: 256px;
          outline: none;
        }
        .search-input.light {
          background-color: white;
          border-color: #d1d5db;
          color: #111827;
        }
        .search-input.dark {
          background-color: #374151;
          border-color: #4b5563;
          color: white;
        }
        .search-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        .lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
        }
        .lang-selector:hover {
          background-color: #f3f4f6;
        }
        .dashboard-container.dark .lang-selector:hover {
          background-color: #374151;
        }
        .flag-icon {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }
        .notification-btn {
          position: relative;
        }
        .notification-badge {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 8px;
          height: 8px;
          background-color: #ef4444;
          border-radius: 50%;
        }
        .profile-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 8px;
        }
        .profile-btn:hover {
          background-color: #f3f4f6;
        }
        .dashboard-container.dark .profile-btn:hover {
          background-color: #374151;
        }
        .profile-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #60a5fa 0%, #4f46e5 100%);
        }
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .page-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }
        .page-content.no-padding {
          padding: 0;
        }
        .breadcrumb {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .breadcrumb h1 {
          font-size: 24px;
          font-weight: 600;
        }
        .breadcrumb-nav {
          font-size: 14px;
        }
        .breadcrumb-nav .muted {
          color: #6b7280;
        }
        .breadcrumb-nav .separator {
          margin: 0 8px;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .search-input {
            width: 200px;
          }
          .header-left,
          .header-right {
            gap: 8px;
          }
        }
      `}</style>

      <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
        {/* Sidebar */}
        <aside className={`sidebar ${darkMode ? 'dark' : 'light'} ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <div className="sidebar-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>D</span>
              </div>
              {!sidebarCollapsed && <span className="logo-text">Dastone</span>}
            </div>
          </div>

          <div className="sidebar-nav" style={{ flex: 1 }}>
            {!sidebarCollapsed && <p className="nav-section-title">Navigation</p>}
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className={`nav-item ${sidebarCollapsed ? 'centered' : ''} ${activeTab === item.label ? 'active' : ''}`}
                onClick={() => setActiveTab(item.label)}
              >
                <item.icon />
                {!sidebarCollapsed && <span className="nav-item-label">{item.label}</span>}
              </div>
            ))}
          </div>

          {/* Logout button */}
          <div className="sidebar-nav" style={{ paddingBottom: '16px' }}>
            <div
              className={`nav-item ${sidebarCollapsed ? 'centered' : ''}`}
              onClick={handleLogout}
            >
              <TbLogout2 />
              {!sidebarCollapsed && <span className="nav-item-label">Logout</span>}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className={`header ${darkMode ? 'dark' : 'light'}`}>
            <div className="header-left">
              <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="btn">
                <FiMenu />
              </button>
              
            </div>

            <div className="header-right">
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className={`search-input ${darkMode ? 'dark' : 'light'}`}
                />
              </div>

              <div className="lang-selector">
                <img src="https://flagcdn.com/w40/us.png" alt="US" className="flag-icon" />
                <FiChevronDown />
              </div>

              <button onClick={() => setDarkMode(!darkMode)} className="btn">
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>

              <button className="btn notification-btn">
                <FiBell />
                <span className="notification-badge"></span>
              </button>

              <div className="profile-btn">
                <div className="profile-avatar"></div>
                <FiChevronDown />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className={`page-content ${activeTab === 'Exhibitors' ? 'no-padding' : ''}`}>
            {activeTab !== 'Exhibitors' && (
              <div className="breadcrumb">
                <h1>{activeTab}</h1>
                <nav className="breadcrumb-nav">
                  <span className="muted">Dastone</span>
                  <span className="separator">→</span>
                  <span>{activeTab}</span>
                </nav>
              </div>
            )}

            {activeTab === 'Dashboard' && <Dashboard darkMode={darkMode} />}
            {activeTab === 'Users' && <Users darkMode={darkMode} />}
            {activeTab === 'Exhibitors' && <ExhibitorList />}
            {activeTab === 'Stalls' && <Stalls darkMode={darkMode} />}
            {activeTab === 'Settings' && <Settings darkMode={darkMode} />}
          </main>
        </div>
      </div>
    </>
  );
};w

export default AdminPanel;
