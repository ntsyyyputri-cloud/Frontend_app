import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Beranda.css'
import StatusBar from './StatusBar'

import topiLogo from '../assets/topi.png'
import bukuLogo from '../assets/buku.svg'
import lampuPensilLogo from '../assets/pensillampu.png'
import iconHome from '../assets/home.svg'
import iconHistory from '../assets/history.svg'
import iconProfile from '../assets/profile.svg'

function Beranda() {
  const navigate = useNavigate()

  return (
    <div className="beranda-container">
      <div className="beranda-header">
        <StatusBar />
        <div className="logo-section">
          <div className="logo-box">
            <img src={topiLogo} alt="Logo FinEdu+" />
          </div>
          <div className="logo-text">
            <h1>FinEdu+</h1>
            <p>Literasi Keuangan</p>
          </div>
        </div>
      </div>

      <svg className="wave-svg" viewBox="0 0 393 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,20 C70,60 140,0 210,35 C280,70 340,10 393,30 L393,70 L0,70 Z" fill="white" />
      </svg>

      <div className="beranda-content">
        <div className="skor-container">
          <p>Skor Literasi Keuangan Anda</p>
          <h2>70</h2>
        </div>

        <div className="menu-list">
          <div className="menu-item" onClick={() => navigate('/modul')}>
            <img src={bukuLogo} alt="Modul" />
            <span>Modul</span>
          </div>
          <div className="menu-item" onClick={() => alert('Buka halaman Simulasi')}>
            <img src={lampuPensilLogo} alt="Simulasi" />
            <span>Simulasi</span>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/beranda')}>
          <img src={iconHome} alt="Home" />
          <p>Home</p>
        </div>
        <div className="nav-item" onClick={() => navigate('/history')}>
          <img src={iconHistory} alt="History" />
          <p>History</p>
        </div>
        <div className="nav-item" onClick={() => navigate('/login')}>
          <img src={iconProfile} alt="Profile" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Beranda
