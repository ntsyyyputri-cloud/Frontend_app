import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul4.css'
 
import Safety from '../../assets/keamanan.png'
import backIcon from '../../assets/back.svg'
 
function Modul4() {
  const navigate = useNavigate()
 
  return (
    <div className="modul-detail-container">
 
      <div className="modul-detail-header">
        <img src={backIcon} alt="Back" className="back-btn" onClick={() => navigate('/modul')} />
        <img src={Safety} alt="Logo" className="header-logo" />
        <span className="header-brand">Manajemen Risiko Digital</span>
      </div>

      {/* ── All cards inside modul-content with keamanan.png watermark ── */}
      <div className="modul-content" style={{ '--watermark-img': `url(${Safety})` } as React.CSSProperties}>

        <div className="box">
          <h2>~ Pengertian</h2>
          <p>
            Manajemen risiko digital adalah proses mengidentifikasi,
            menganalisis, dan mengurangi risiko yang terjadi
            dalam penggunaan teknologi digital.
          </p>
        </div>
 
        <div className="box">
          <h2>~ Tujuan</h2>
          <ul>
            <li>Melindungi data dan informasi</li>
            <li>Mengurangi ancaman keamanan digital</li>
          </ul>
        </div>
 
        <div className="box">
          <h2>~ Cara Melakukan</h2>
          <ul>
            <li>Gunakan password yang kuat</li>
            <li>Update aplikasi secara rutin</li>
            <li>Hindari link mencurigakan</li>
          </ul>
        </div>
 
        <div className="box">
          <h2>~ Manfaat</h2>
          <ul>
            <li>Data lebih aman</li>
            <li>Terhindar dari penipuan online</li>
          </ul>
        </div>
 
        <div className="btn-row">
          <button className="btn-primary" onClick={() => navigate('/quiz4')}>Quiz Time</button>
          <button className="btn-secondary" onClick={() => navigate('/modul')}>Selesai</button>
        </div>

      </div>
    </div>
  )
}
 
export default Modul4