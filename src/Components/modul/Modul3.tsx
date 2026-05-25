import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul3.css'

import Pengeluaran from '../../assets/pengeluaran.png'
import backIcon from '../../assets/back.svg'

function Modul3() {
  const navigate = useNavigate()

  return (
    <div className="modul-detail-container">

      {/* ── Header ── */}
      <div className="modul-detail-header">
        <img src={backIcon} alt="Back" className="back-btn" onClick={() => navigate('/modul')} />
        <img src={Pengeluaran} alt="Logo" className="header-logo" />
        <span className="header-brand">Kontrol Pengeluaran</span>
      </div>

      {/* ── Content: pengeluaran.png passed as CSS custom property for watermark ── */}
      <div className="modul-content" style={{ '--watermark-img': `url(${Pengeluaran})` } as React.CSSProperties}>

        <div className="box">
          <h2>Pengertian</h2>
          <p>
            Kontrol pengeluaran adalah cara mengatur dan membatasi
            pengeluaran agar tidak melebihi pemasukan.
          </p>
        </div>

        <div className="box">
          <h2>~ Tujuan</h2>
          <ul>
            <li>Menghindari pemborosan</li>
            <li>Menjaga keuangan tetap stabil</li>
          </ul>
        </div>

        <div className="box">
          <h2>~ Cara Melakukan</h2>
          <ul>
            <li>Catat semua pengeluaran</li>
            <li>Bedakan kebutuhan dan keinginan</li>
            <li>Buat batas anggaran</li>
          </ul>
        </div>

        <div className="box">
          <h2>~ Metode Budgeting Populer</h2>
          <ul>
            <li>50/30/20 Rule</li>
            <li>Budgeting harian/bulanan</li>
            <li>Sistem amplop</li>
          </ul>
        </div>

        <div className="box">
          <h2>~ Manfaat</h2>
          <ul>
            <li>Uang lebih terkontrol</li>
            <li>Bisa menabung lebih banyak</li>
          </ul>
        </div>

        {/* ── Buttons ── */}
        <div className="btn-row">
          <button className="btn-primary" onClick={() => navigate('/quiz3')}>Quiz Time</button>
          <button className="btn-secondary" onClick={() => navigate('/modul4')}>Modul Selanjutnya</button>
        </div>

      </div>
    </div>
  )
}

export default Modul3