// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import AdminLogin from "./components/AdminLogin";
// import AdminRegister from "./pages/AdminRegister";
// import AdminPanel from "./pages/AdminPanel";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<AdminRegister />} />
//       <Route path="/login" element={<AdminLogin />} />
//       <Route
//         path="/admin-panel"
//         //element={isLoggedIn ? <AdminPanel /> : <Navigate to="/admin-login" />}
//         element={ <AdminPanel /> }
//       />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>  
//   );
// }


//need to login we can't go http://localhost:5174/admin-panel

import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AdminRegister />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/admin-panel"
        element={
          isLoggedIn ? (
            <AdminPanel />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
