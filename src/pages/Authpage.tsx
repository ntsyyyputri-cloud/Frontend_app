import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Authpage.css";
import Logo from "../assets/FinEdu.png";
import authBg from "../assets/enter.jpg";

type Mode = "login" | "signup";

const Authpage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialMode = (searchParams.get("mode") as Mode) ?? "login";

  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Login:", { email, password, remember });
    } else {
      console.log("Signup:", { email, password, remember });
    }
    // Navigate to Beranda after login or signup
    navigate("/beranda");
  };

  return (
    <div className="auth-container">
      {/* Background Image */}
      <div className="auth-bg" style={{ backgroundImage: `url(${authBg})` }}></div>

      {/* Card */}
      <div className="auth-card">
        {/* Logo — clicking it goes back home */}
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <div className="logo-box">
            <img src={Logo} alt="FinEdu+" />
          </div>
        </div>

        {/* Title */}
        <h2>{mode === "login" ? "Masuk" : "Daftar"}</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Kata Sandi</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Remember */}
          {mode === "signup" && (
            <div className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span>Ingat saya</span>
            </div>
          )}

          {/* Button */}
          <button type="submit" className="submit-btn">
            {mode === "login" ? "Masuk" : "Daftar"}
          </button>
        </form>

        {/* Switch */}
        <p className="switch-text">
          {mode === "login" ? "Belum punya akun?" : "Sudah punya akun?"}
          <span onClick={() => setMode(mode === "login" ? "signup" : "login")}>
            {mode === "login" ? " Daftar" : " Masuk"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Authpage;