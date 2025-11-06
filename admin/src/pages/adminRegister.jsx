// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AdminRegister({ onRegister }) {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Inject CSS into <head>
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       :root {
//         --bg: #f4f7fb;
//         --card: #ffffff;
//         --accent: #2b6ef6;
//         --muted: #6b7280;
//         --danger: #e02424;
//         --input-border: #d6d6e0;
//         --shadow: 0 6px 18px rgba(23, 37, 84, 0.08);
//         --radius: 12px;
//         font-family: Inter, sans-serif;
//       }
//       body { margin: 0; background: var(--bg); }
//       .admin-register-page {
//         min-height: 100vh;
//         display: grid;
//         place-items: center;
//         padding: 32px;
//       }
//       .admin-register-card {
//         width: 100%;
//         max-width: 420px;
//         background: var(--card);
//         border-radius: var(--radius);
//         padding: 28px;
//         box-shadow: var(--shadow);
//         border: 1px solid rgba(16, 24, 40, 0.04);
//         display: flex;
//         flex-direction: column;
//         margin-left:600px;
//       }
//       .admin-register-title {
//         margin-bottom: 18px;
//         font-size: 22px;
//         text-align: center;
//         color: #0f172a;
//       }
//       .field-label {
//         margin: 12px 0 6px;
//         font-size: 13px;
//         color: var(--muted);
//       }
//       .field-input {
//         width: 100%;
//         padding: 12px 14px;
//         font-size: 15px;
//         border-radius: 8px;
//         border: 1px solid var(--input-border);
//         background: #fff;
//         outline: none;
//         transition: 0.2s;
//         color: black;
//       }
//       .field-input:focus {
//         border-color: var(--accent);
//         box-shadow: 0 6px 20px rgba(43, 110, 246, 0.08);
//       }
//       .input-error {
//         border-color: var(--danger);
//       }
//       .field-error {
//         font-size: 13px;
//         color: var(--danger);
//         margin-top: 6px;
//       }
//       .password-row {
//         display: flex;
//         gap: 8px;
//         align-items: center;
//       }
//       .toggle-password {
//         background: transparent;
//         border: 1px solid var(--input-border);
//         padding: 8px 10px;
//         border-radius: 8px;
//         font-size: 13px;
//         color: var(--accent);
//         cursor: pointer;
//       }
//       .submit-btn {
//         width: 100%;
//         margin-top: 18px;
//         background: linear-gradient(#d8781e, #e98d2f);
//         color: white;
//         border: none;
//         padding: 12px;
//         border-radius: 10px;
//         font-weight: 600;
//         font-size: 15px;
//         cursor: pointer;
//         box-shadow: 0 8px 20px rgba(43, 110, 246, 0.18);
//       }
//       .bottom-link {
//         margin-top: auto;
//         font-size: 14px;
//         color: var(--muted);
//         text-align: center;
//       }
//       .bottom-link a {
//         color: var(--accent);
//         text-decoration: none;
//         font-weight: 600;
//         margin-left: 6px;
//       }
//       .bottom-link a:hover {
//         text-decoration: underline;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const validate = () => {
//     const errs = {};
//     if (!/^\d{10}$/.test(mobileNumber.trim())) {
//       errs.mobileNumber = "Mobile number must be 10 digits";
//     }
//     if (password.length < 6) {
//       errs.password = "Password must be at least 6 characters";
//     }
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const payload = {
//       mobileNumber: mobileNumber.trim(),
//       password,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/admin/register",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Registration success:", response.data);

//       // Store token in localStorage
//       if (response.data.token) {
//         localStorage.setItem("adminToken", response.data.token);
//       }

//   toast.success(response.data.message || "Registration successful");
//   if (onRegister) onRegister();
//   setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       console.error("Registration error:", err.response?.data || err.message);
//   toast.error(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="admin-register-page">
//   <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
//       <form className="admin-register-card" onSubmit={handleSubmit} noValidate>
//         <h1 className="admin-register-title">Admin Register</h1>

//         <label htmlFor="mobileNumber" className="field-label">
//           Mobile Number
//         </label>
//         <input
//           id="mobileNumber"
//           name="mobileNumber"
//           type="tel"
//           inputMode="numeric"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
//           placeholder="e.g. 9876543210"
//           className={`field-input ${errors.mobileNumber ? "input-error" : ""}`}
//           required
//         />
//         {errors.mobileNumber && (
//           <div className="field-error">{errors.mobileNumber}</div>
//         )}

//         <label htmlFor="password" className="field-label">
//           Password
//         </label>
//         <div className="password-row">
//           <input
//             id="password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             className={`field-input ${errors.password ? "input-error" : ""}`}
//             required
//           />
//           <button
//             type="button"
//             className="toggle-password"
//             onClick={() => setShowPassword((prev) => !prev)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>
//         {errors.password && (
//           <div className="field-error">{errors.password}</div>
//         )}

//         <button type="submit" className="submit-btn">
//           Register Admin
//         </button>

//         <div className="bottom-link">
//           Already have an account?{" "}
//           <Link to="/login">Login here</Link>
//         </div>
//       </form>
//     </div>
//   );
// }












import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminRegister({ onRegister }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --bg: #f4f7fb;
        --card: #ffffff;
        --accent: #f97316;
        --muted: #6b7280;
        --danger: #e02424;
        --input-border: #d6d6e0;
        --shadow: 0 6px 18px rgba(23, 37, 84, 0.08);
        --radius: 12px;
        font-family: Inter, sans-serif;
      }
      body {
        margin: 0;
        background: var(--bg);
      }
      .admin-register-page {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 32px;
      }
      .admin-register-card {
        width: 100%;
        max-width: 420px;
        background: var(--card);
        border-radius: var(--radius);
        padding: 28px;
        box-shadow: var(--shadow);
        border: 1px solid rgba(16, 24, 40, 0.04);
        display: flex;
        flex-direction: column;
      }
      .admin-register-title {
        margin-bottom: 18px;
        font-size: 22px;
        text-align: center;
        color: #0f172a;
        letter-spacing: -0.2px;
      }
      .field-label {
        margin: 12px 0 6px;
        font-size: 13px;
        color: var(--muted);
      }
      .field-input {
        width: 100%;
        padding: 12px 14px;
        font-size: 15px;
        border-radius: 8px;
        border: 1px solid var(--input-border);
        background: #fff;
        outline: none;
        transition: 0.2s;
        color: black;
      }
      .field-input:focus {
        border-color: var(--accent);
        box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
      }
      .input-error {
        border-color: var(--danger);
      }
      .field-error {
        font-size: 13px;
        color: var(--danger);
        margin-top: 6px;
      }
      .password-row {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .toggle-password {
        background: transparent;
        border: 1px solid var(--input-border);
        padding: 8px 10px;
        border-radius: 8px;
        font-size: 13px;
        color: var(--accent);
        cursor: pointer;
      }
      .submit-btn {
        width: 100%;
        margin-top: 18px;
        background: var(--accent);
        color: white;
        border: none;
        padding: 12px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
      }
      .submit-btn:hover {
        background: #e65a00;
      }
      .bottom-link {
        margin-top: auto;
        font-size: 14px;
        color: var(--muted);
        text-align: center;
        margin-top: 18px;
      }
      .bottom-link a {
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
        margin-left: 6px;
      }
      .bottom-link a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const validate = () => {
    const errs = {};
    if (!/^\d{10}$/.test(mobileNumber.trim())) {
      errs.mobileNumber = "Mobile number must be 10 digits";
    }
    if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      mobileNumber: mobileNumber.trim(),
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
      }

      toast.success(response.data.message || "Registration successful");
      if (onRegister) onRegister();
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="admin-register-page">
      <ToastContainer position="top-right" autoClose={2000} />
      <form className="admin-register-card" onSubmit={handleSubmit} noValidate>
        <h1 className="admin-register-title">Admin Register</h1>

        <label htmlFor="mobileNumber" className="field-label">
          Mobile Number
        </label>
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          inputMode="numeric"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter Number"
          className={`field-input ${errors.mobileNumber ? "input-error" : ""}`}
          required
        />
        {errors.mobileNumber && (
          <div className="field-error">{errors.mobileNumber}</div>
        )}

        <label htmlFor="password" className="field-label">
          Password
        </label>
        <div className="password-row">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`field-input ${errors.password ? "input-error" : ""}`}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <div className="field-error">{errors.password}</div>
        )}

        <button type="submit" className="submit-btn">
          Register Admin
        </button>

        <div className="bottom-link">
          Already have an account?
          <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
}
