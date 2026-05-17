import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul.css'
import StatusBar from './StatusBar'

import topiLogo from '../assets/topi.png'
import bukuLogo from '../assets/buku.svg'
import backIcon from '../assets/back.svg'

function Modul() {
  const navigate = useNavigate()

  const modules = [
    { title: 'Modul 1', subtitle: 'E-Wallet' },
    { title: 'Modul 2', subtitle: 'Budgeting' },
    { title: 'Modul 3', subtitle: 'Kontrol Pengeluaran' },
    { title: 'Modul 4', subtitle: 'Manajemen Resiko Digital' },
  ]

  return (
    <div className="modul-container">
      <div className="modul-header">
        <StatusBar />
        <div className="header-row">
          <img src={backIcon} alt="Back" className="back-btn" onClick={() => navigate('/beranda')} />
          <img src={topiLogo} alt="Logo" className="header-logo" />
          <span className="header-title">FinEdu+</span>
        </div>
      </div>

      <svg className="wave-svg" viewBox="0 0 402 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,20 C80,55 160,5 240,35 C320,65 360,15 402,30 L402,70 L0,70 Z" fill="white" />
      </svg>

      <div className="modul-content">
        <div className="modul-list">
          {modules.map((item, i) => (
            <div className="modul-card" key={i}>
              <img src={bukuLogo} alt="Buku" className="card-icon" />
              <div className="card-text">
                <p className="card-title">{item.title}</p>
                <p className="card-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modul
