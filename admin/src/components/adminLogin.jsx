// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

// // export default function AdminLogin({ onLogin }) {
// //   const [mobile, setMobile] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   const navigate = useNavigate(); 

// //   useEffect(() => {
// //     const style = document.createElement("style");
// //     style.textContent = `
// //       :root{
// //         --bg:#f4f7fb;
// //         --card:#ffffff;
// //         --accent:#f97316; /* orange */
// //         --muted:#6b7280;
// //         --danger:#e02424;
// //         --input-border:#d6d6e0;
// //         --shadow: 0 6px 18px rgba(23, 37, 84, 0.08);
// //         --radius:12px;
// //         font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
// //       }
// //       * { box-sizing: border-box; }
// //       body { margin:0; background:var(--bg); }
// //       .admin-login-page {
// //         min-height: 100vh;
// //         display: grid;
// //         place-items: center;
// //         padding: 32px;
// //         margin-left:600px;
// //       }
// //       .admin-login-card {
// //         width: 100%;
// //         max-width: 420px;
// //         background: var(--card);
// //         border-radius: var(--radius);
// //         padding: 28px;
// //         box-shadow: var(--shadow);
// //         border: 1px solid rgba(16,24,40,0.04);
// //         display: flex;
// //         flex-direction: column;
// //       }
// //       .admin-login-title {
// //         margin: 0 0 18px 0;
// //         font-size: 22px;
// //         color: #0f172a;
// //         text-align: center;
// //         letter-spacing: -0.2px;
// //       }
// //       .field-label {
// //         display:block;
// //         margin: 12px 0 6px;
// //         font-size: 13px;
// //         color: var(--muted);
// //       }
// //       .field-input {
// //         width: 100%;
// //         padding: 12px 14px;
// //         font-size: 15px;
// //         border-radius: 8px;
// //         border: 1px solid var(--input-border);
// //         background: #fff;
// //         outline: none;
// //         transition: box-shadow .12s, border-color .12s;
// //         color: black;
// //       }
// //       .field-input:focus {
// //         box-shadow: 0 6px 20px rgba(249,115,22,0.3);
// //         border-color: var(--accent);
// //       }
// //       .password-row {
// //         display:flex;
// //         gap:8px;
// //         align-items:center;
// //       }
// //       .toggle-password {
// //         background: transparent;
// //         border: 1px solid var(--input-border);
// //         padding: 8px 10px;
// //         border-radius: 8px;
// //         font-size: 13px;
// //         color: var(--accent);
// //         cursor:pointer;
// //         transition: background .12s, transform .08s;
// //       }
// //       .toggle-password:hover { transform: translateY(-1px); }
// //       .input-error {
// //         border-color: var(--danger);
// //       }
// //       .field-error {
// //         margin-top:6px;
// //         font-size: 13px;
// //         color: var(--danger);
// //       }
// //       .submit-btn {
// //         width: 100%;
// //         margin-top: 18px;
// //         background: var(--accent);
// //         color: white;
// //         border: none;
// //         padding: 12px;
// //         border-radius: 10px;
// //         font-weight: 600;
// //         font-size: 15px;
// //         cursor: pointer;
// //         box-shadow: 0 8px 20px rgba(249,115,22,0.3);
// //         transition: background-color 0.3s ease;
// //       }
// //       .submit-btn:hover {
// //         background: #e65a00;
// //       }
// //       .submit-btn:active { transform: translateY(1px); }
// //       .bottom-link {
// //         margin-top: auto;
// //         font-size: 14px;
// //         color: var(--muted);
// //         text-align: center;
// //       }
// //       .bottom-link a {
// //         color: var(--accent);
// //         text-decoration: none;
// //         font-weight: 600;
// //         margin-left: 6px;
// //       }
// //       .bottom-link a:hover {
// //         text-decoration: underline;
// //       }
// //       @media (max-width: 480px) {
// //         .admin-login-card { padding: 20px; border-radius: 10px; }
// //         .admin-login-title { font-size: 20px; }
// //         .toggle-password { padding: 6px 8px; font-size: 12px; }
// //       }
// //     `;
// //     document.head.appendChild(style);
// //     return () => {
// //       document.head.removeChild(style);
// //     };
// //   }, []);

// //   const validate = () => {
// //     const errs = {};
// //     if (!/^\d{10}$/.test(mobile.trim())) {
// //       errs.mobile = "Mobile number must be exactly 10 digits.";
// //     }
// //     if (password.length < 6) {
// //       errs.password = "Password must be at least 6 characters.";
// //     }
// //     setErrors(errs);
// //     return Object.keys(errs).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!validate()) return;

// //     const payload = { mobile: mobile.trim(), password };
// //     console.log("Login payload:", payload);

// //     if (typeof onLogin === "function") onLogin(payload);

// //     // Navigate to AdminPanel on successful login
// //     navigate("/admin-panel");
// //   };

// //   return (
// //     <div className="admin-login-page">
// //       <form className="admin-login-card" onSubmit={handleSubmit} noValidate>
// //         <h1 className="admin-login-title">Admin Login</h1>

// //         <label htmlFor="mobile" className="field-label">
// //           Mobile Number
// //         </label>
// //         <input
// //           id="mobile"
// //           name="mobile"
// //           type="tel"
// //           inputMode="numeric"
// //           value={mobile}
// //           onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, ""))}
// //           placeholder="e.g. 9876543210"
// //           className={`field-input ${errors.mobile ? "input-error" : ""}`}
// //           aria-invalid={!!errors.mobile}
// //           aria-describedby={errors.mobile ? "mobile-error" : undefined}
// //           maxLength={15}
// //           required
// //         />
// //         {errors.mobile && (
// //           <div id="mobile-error" className="field-error">
// //             {errors.mobile}
// //           </div>
// //         )}

// //         <label htmlFor="password" className="field-label">
// //           Password
// //         </label>
// //         <div className="password-row">
// //           <input
// //             id="password"
// //             name="password"
// //             type={showPassword ? "text" : "password"}
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter password"
// //             className={`field-input ${errors.password ? "input-error" : ""}`}
// //             aria-invalid={!!errors.password}
// //             aria-describedby={errors.password ? "password-error" : undefined}
// //             required
// //           />
// //           <button
// //             type="button"
// //             className="toggle-password"
// //             onClick={() => setShowPassword((s) => !s)}
// //             aria-label={showPassword ? "Hide password" : "Show password"}
// //           >
// //             {showPassword ? "Hide" : "Show"}
// //           </button>
// //         </div>
// //         {errors.password && (
// //           <div id="password-error" className="field-error">
// //             {errors.password}
// //           </div>
// //         )}

// //         <button type="submit" className="submit-btn">
// //           Login
// //         </button>

// //         <div className="bottom-link">
// //           Don't have an account?{" "}
// //           <a href="/" aria-label="Go to register page">
// //             Register here
// //           </a>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AdminLogin({ onLogin }) {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       :root{
//         --bg:#f4f7fb;
//         --card:#ffffff;
//         --accent:#f97316;
//         --muted:#6b7280;
//         --danger:#e02424;
//         --input-border:#d6d6e0;
//         --shadow: 0 6px 18px rgba(23, 37, 84, 0.08);
//         --radius:12px;
//         font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
//       }
//       * { box-sizing: border-box; }
//       body { margin:0; background:var(--bg); }
//       .admin-login-page { min-height: 100vh; display: grid; place-items: center; padding: 32px; margin-left:600px; }
//       .admin-login-card { width: 100%; max-width: 420px; background: var(--card); border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); border: 1px solid rgba(16,24,40,0.04); display: flex; flex-direction: column; }
//       .admin-login-title { margin: 0 0 18px 0; font-size: 22px; color: #0f172a; text-align: center; letter-spacing: -0.2px; }
//       .field-label { display:block; margin: 12px 0 6px; font-size: 13px; color: var(--muted); }
//       .field-input { width: 100%; padding: 12px 14px; font-size: 15px; border-radius: 8px; border: 1px solid var(--input-border); background: #fff; outline: none; color: black; }
//       .field-input:focus { box-shadow: 0 6px 20px rgba(249,115,22,0.3); border-color: var(--accent); }
//       .password-row { display:flex; gap:8px; align-items:center; }
//       .toggle-password { background: transparent; border: 1px solid var(--input-border); padding: 8px 10px; border-radius: 8px; font-size: 13px; color: var(--accent); cursor:pointer; }
//       .input-error { border-color: var(--danger); }
//       .field-error { margin-top:6px; font-size: 13px; color: var(--danger); }
//       .submit-btn { width: 100%; margin-top: 18px; background: var(--accent); color: white; border: none; padding: 12px; border-radius: 10px; font-weight: 600; font-size: 15px; cursor: pointer; }
//       .submit-btn:hover { background: #e65a00; }
//       .bottom-link { margin-top: auto; font-size: 14px; color: var(--muted); text-align: center; }
//       .bottom-link a { color: var(--accent); text-decoration: none; font-weight: 600; margin-left: 6px; }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const validate = () => {
//     const errs = {};
//     if (!/^\d{10}$/.test(mobile.trim())) {
//       errs.mobile = "Mobile number must be exactly 10 digits.";
//     }
//     if (password.length < 6) {
//       errs.password = "Password must be at least 6 characters.";
//     }
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       if (errors.mobile) toast.error(errors.mobile);
//       if (errors.password) toast.error(errors.password);
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         mobileNumber: mobile.trim(),
//         password
//       });

//       const { token, message } = res.data;

//       if (token) {
//         localStorage.setItem("adminToken", token); // Save token
//         toast.success("Login successful!");
//         if (typeof onLogin === "function") onLogin(token);
//         navigate("/admin-panel");
//       } else {
//         toast.error(message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="admin-login-page">
//       <form className="admin-login-card" onSubmit={handleSubmit} noValidate>
//         <ToastContainer />
//         <h1 className="admin-login-title">Admin Login</h1>

//         <label htmlFor="mobile" className="field-label">
//           Mobile Number
//         </label>
//         <input
//           id="mobile"
//           name="mobile"
//           type="tel"
//           inputMode="numeric"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, ""))}
//           placeholder="e.g. 9876543210"
//           className={`field-input ${errors.mobile ? "input-error" : ""}`}
//           maxLength={10}
//           required
//         />
//         {errors.mobile && <div className="field-error">{errors.mobile}</div>}

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
//             onClick={() => setShowPassword((s) => !s)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>
//         {errors.password && <div className="field-error">{errors.password}</div>}

//         <button type="submit" className="submit-btn">
//           Login
//         </button>

//         <div className="bottom-link">
//           Don't have an account?{" "}
//           <a href="/">Register here</a>
//         </div>
//       </form>
//     </div>
//   );
// }












import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin({ onLogin }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      :root{
        --bg:#f4f7fb;
        --card:#ffffff;
        --accent:#f97316;
        --muted:#6b7280;
        --danger:#e02424;
        --input-border:#d6d6e0;
        --shadow: 0 6px 18px rgba(23, 37, 84, 0.08);
        --radius:12px;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      }
      * { box-sizing: border-box; }
      body { margin:0; background:var(--bg); }
      .admin-login-page { min-height: 100vh; display: grid; place-items: center; padding: 32px; }
      .admin-login-card { width: 100%; max-width: 420px; background: var(--card); border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); border: 1px solid rgba(16,24,40,0.04); display: flex; flex-direction: column; }
      .admin-login-title { margin: 0 0 18px 0; font-size: 22px; color: #0f172a; text-align: center; letter-spacing: -0.2px; }
      .field-label { display:block; margin: 12px 0 6px; font-size: 13px; color: var(--muted); }
      .field-input { width: 100%; padding: 12px 14px; font-size: 15px; border-radius: 8px; border: 1px solid var(--input-border); background: #fff; outline: none; color: black; }
      .field-input:focus { box-shadow: 0 6px 20px rgba(249,115,22,0.3); border-color: var(--accent); }
      .password-row { display:flex; gap:8px; align-items:center; }
      .toggle-password { background: transparent; border: 1px solid var(--input-border); padding: 8px 10px; border-radius: 8px; font-size: 13px; color: var(--accent); cursor:pointer; }
      .input-error { border-color: var(--danger); }
      .submit-btn { width: 100%; margin-top: 18px; background: var(--accent); color: white; border: none; padding: 12px; border-radius: 10px; font-weight: 600; font-size: 15px; cursor: pointer; }
      .submit-btn:hover { background: #e65a00; }
      .bottom-link { margin-top: auto; font-size: 14px; color: var(--muted); text-align: center; }
      .bottom-link a { color: var(--accent); text-decoration: none; font-weight: 600; margin-left: 6px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile.trim())) {
      toast.error("Mobile number must be exactly 10 digits", { position: "top-right" });
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", { position: "top-right" });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        mobileNumber: mobile.trim(),
        password,
      });

      const { token, message } = res.data;

      if (token) {
        localStorage.setItem("adminToken", token);
        toast.success("Login successful!", { position: "top-right" });

        if (typeof onLogin === "function") onLogin(token);

        // ✅ Navigate after 0.5 sec
        setTimeout(() => {
          navigate("/admin-panel");
        }, 500);
      } else {
        toast.error(message || "Login failed", { position: "top-right" });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", { position: "top-right" });
    }
  };

  return (
    <div className="admin-login-page">
      <ToastContainer position="top-right" autoClose={3000} />
      <form className="admin-login-card" onSubmit={handleSubmit} noValidate>
        <h1 className="admin-login-title">Admin Login</h1>

        <label htmlFor="mobile" className="field-label">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          inputMode="numeric"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/[^\d]/g, ""))}
          placeholder="Enter Number"
          className="field-input"
          maxLength={10}
          required
        />

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
            className="field-input"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>

        <div className="bottom-link">
          Don't have an account? <a href="/">Register here</a>
        </div>
      </form>
    </div>
  );
}
