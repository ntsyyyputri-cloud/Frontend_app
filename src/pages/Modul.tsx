import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul.css'

import topiLogo   from '../assets/topi.png'
import backIcon   from '../assets/back.svg'
import iconEwallet   from '../assets/wallet.png'
import iconBudget    from '../assets/budgeting.png'
import iconKontrol   from '../assets/pengeluaran.png'
import iconResiko    from '../assets/keamanan.png'

function Modul() {
  const navigate = useNavigate()

  const modules = [
    { label: 'Modul 1', subtitle: 'E-Wallet',                    icon: iconEwallet,  route: '/modul1' },
    { label: 'Modul 2', subtitle: 'Budgeting',                   icon: iconBudget,   route: '/modul2' },
    { label: 'Modul 3', subtitle: 'Kontrol\nPengeluaran',        icon: iconKontrol,  route: '/modul3' },
    { label: 'Modul 4', subtitle: 'Manajemen Resiko\nDigital',   icon: iconResiko,   route: '/modul4' },
  ]

  return (
    <div className="modul-container">

      {/* ── Header ── */}
      <div className="modul-header">
        <div className="header-row">
          <img
            src={backIcon}
            alt="Back"
            className="back-btn"
            onClick={() => navigate('/beranda')}
          />
          <img src={topiLogo} alt="Logo" className="header-logo" />
          <span className="header-title">FinEdu+</span>
        </div>
      </div>

      {/* ── Wave divider ── */}


      {/* ── Cards ── */}
      <div className="modul-content">
        <div className="modul-grid">
          {modules.map((item, i) => (
            <div
              className="modul-card"
              key={i}
              onClick={() => navigate(item.route)}
            >
              <span className="card-module-label">{item.label}</span>

              <img src={item.icon} alt={item.subtitle} className="card-icon" />

              <p className="card-subtitle">
                {item.subtitle.split('\n').map((line, j, arr) => (
                  <React.Fragment key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Modul