import React from 'react'
import { useNavigate } from 'react-router-dom'
import './History.css'

import topiLogo from '../assets/topi.png'
import bukuLogo from '../assets/buku.svg'
import iconHome from '../assets/home.svg'
import iconHistory from '../assets/history.svg'
import iconProfile from '../assets/profile.svg'
import backIcon from '../assets/back.svg'

function History() {
  const navigate = useNavigate()

  const activities = [
    { date: '6 March 2025 04:10', modul: 'Modul 1' },
    { date: '13 March 2025 06:07', modul: 'Modul 3' },
    { date: '21 March 2025 13:13', modul: 'Modul 1' },
  ]

  return (
    <div className="history-container">
      <div className="history-header">
        <div className="header-row">
          <img src={backIcon} alt="Back" className="back-btn" onClick={() => navigate('/beranda')} />
          <img src={topiLogo} alt="Logo" className="header-logo" />
          <span className="header-title">FinEdu+</span>
        </div>
      </div>

      <svg className="wave-svg" viewBox="0 0 402 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,20 C80,55 160,5 240,35 C320,65 360,15 402,30 L402,70 L0,70 Z" fill="white" />
      </svg>

      <div className="history-content">
        <h2 className="section-title">Recent Activity</h2>
        <div className="activity-list">
          {activities.map((item, i) => (
            <div className="activity-card" key={i}>
              <img src={bukuLogo} alt="Buku" className="card-icon" />
              <div className="card-text">
                <p className="card-date">{item.date}</p>
                <p className="card-modul">{item.modul}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/beranda')}>
          <img src={iconHome} alt="Home" />
          <p>Home</p>
        </div>
        <div className="nav-item active" onClick={() => navigate('/history')}>
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

export default History
