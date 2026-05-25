import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Beranda.css'
import dashboard from '../assets/dashboard.png'
import Profil from '../assets/gender.png'
import Logo from '../assets/FinEdu.png'
import modul from '../assets/modul.png'
import simulasi from '../assets/sim.png'

function Beranda() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <img src={Logo} alt="FinEdu+" />
          </div>
          <span>FinEdu+</span>
        </div>

        <div className="profile" onClick={() => navigate('/profile')}>
          <img src={Profil} alt="Profil" className="profile-img" />
          <span>Profil</span>
        </div>
      </header>

      {/* Page body — hero then features, stacked cleanly */}
      <div className="page-body">

        {/* Hero */}
        <section className="hero">
          <div className="hero-text">
            <h1>Hi, Vokasioner</h1>
            <p>Mulai tingkatkan literasi keuanganmu hari ini</p>
          </div>
          <img src={dashboard} alt="Hero" className="hero-img" />
        </section>

        {/* Features */}
        <section className="features">
          <h2>Fitur Kami</h2>

          <div className="feature-grid">
            <div className="card modul" onClick={() => navigate('/modul')}>
              <img src={modul} alt="Modul" />
              <p>Modul Digital</p>
            </div>

            <div className="card simulasi" onClick={() => navigate('/simulasi')}>
              <img src={simulasi} alt="Simulasi" />
              <p>Simulasi</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Beranda