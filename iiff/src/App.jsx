

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './pages/About';
// import Home from './pages/Home';
// import Studentregister from './components/Studentregister'
// import Entrepreneur from './components/Entrepreneur';
// import ThankYou from './components/ThankYou';
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function App() {
//   return (
//     <Router>

//       <Header />

//       {/* Main content (changes per route) */}
//       <main style={{ minHeight: '80vh' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/student-register" element={<Studentregister/>}/>
//           <Route path="/Entrepreneur-register" element={<Entrepreneur/>}/>
//           <Route path="/Thanks" element={<ThankYou/>}/>
//         </Routes>
//       </main>

//       {/* Footer should always be at the bottom */}
//       <Footer />
//        <ToastContainer/>
//     </Router>
   
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './pages/About';
// import Home from './pages/Home';
// import Studentregister from './components/Studentregister';
// import Entrepreneur from './components/Entrepreneur';
// import ThankYou from './components/ThankYou';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Expo from './components/Expo/Expo';

// function App() {
//   return (
//     <Router>
//       <Header />

//       {/* Main content (changes per route) */}
//       <main style={{ minHeight: '80vh' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/student-register" element={<Studentregister />} />
//           <Route path="/entrepreneur-register" element={<Entrepreneur />} />
//           <Route path="/thanks" element={<ThankYou />} />
//           <Route path="/expo" element={<Expo />} />
//         </Routes>
//       </main>

//       {/* Footer should always be at the bottom */}
//       <Footer />
//       <ToastContainer />
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Studentregister from './components/Studentregister';
import Entrepreneur from './components/Entrepreneur';
import ThankYou from './components/ThankYou';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Expo from './components/Expo/Expo';

function AppContent() {
  const location = useLocation();

  // Hide header and footer only on /expo route
  const showHeader = location.pathname !== '/expo';
  return (
    <>
      {showHeader && <Header />}

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student-register" element={<Studentregister />} />
          <Route path="/entrepreneur-register" element={<Entrepreneur />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/expo" element={<Expo />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

