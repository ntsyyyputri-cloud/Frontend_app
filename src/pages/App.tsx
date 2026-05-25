import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import logo from "../assets/FinEdu.png";
import heroBg from "../assets/interface.png";
import Authpage from "./Authpage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="FinEdu+" />
          </div>
          <span className="logo-text">FinEdu+</span>
        </div>

        <div className="nav-buttons">
          <button className="btn masuk" onClick={() => navigate("/auth?mode=login")}>
            Masuk
          </button>
          <button className="btn daftar" onClick={() => navigate("/auth?mode=signup")}>
            Daftar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-text">
          <h1>
            MULAI KELOLA KEUANGAN <br />
            ANDA DENGAN CERDAS <br />
            BERSAMA FINEDU+
          </h1>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authpage />} />
    </Routes>
  );
}

export default App;