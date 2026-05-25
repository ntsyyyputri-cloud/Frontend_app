import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul2.css'
 
import Budget from '../../assets/budgeting.png'
import backIcon from '../../assets/back.svg'
 
function Modul2() {
  const navigate = useNavigate()
 
  return (
    <div className="modul-detail-container">
 
      <div className="modul-detail-header">
        <img src={backIcon} alt="Back" className="back-btn" onClick={() => navigate('/modul')} />
        <img src={Budget} alt="Logo" className="header-logo" />
        <span className="header-brand">Budgeting</span>
      </div>

      <div className="modul-content" style={{ '--watermark-img': `url(${Budget})` } as React.CSSProperties}>

        <div className="box">
          <h2>~ Pengertian Budgeting</h2>
          <p>
            Budgeting adalah proses merencanakan dan mengatur pemasukan serta
            pengeluaran agar keuangan tetap terkontrol dan tujuan finansial
            dapat tercapai.
          </p>
        </div>
 
        <div className="box">
          <h2>~ Tujuan Budgeting</h2>
          <p>
            Mengontrol pengeluaran, Menghindari pemborosan,
            Menabung untuk masa depan, Mencapai tujuan keuangan.
          </p>
        </div>
 
        <div className="box">
          <h2>~ Komponen Budgeting</h2>
          <p>
            1. Pemasukan (Income) <br/>
            2. Pengeluaran (Expenses) <br/>
            3. Tabungan (Saving)
          </p>
        </div>
 
        <div className="box">
          <h2>~ Metode Budgeting Populer</h2>
          <p>
            50/30/20 Rule, Budgeting harian/bulanan,
            Sistem amplop.
          </p>
        </div>
 
        <div className="box">
          <h2>~ Manfaat Budgeting</h2>
          <p>
            Keuangan lebih teratur, Mengurangi stres,
            Membantu target finansial.
          </p>
        </div>
 
        <div className="box">
          <h2>~ Tips Budgeting Efektif</h2>
          <p>
            Catat pemasukan, buat prioritas,
            sisihkan tabungan, evaluasi rutin.
          </p>
        </div>
 
        <div className="btn-row">
          <button className="btn-primary" onClick={() => navigate('/quiz2')}>Quiz Time</button>
          <button className="btn-secondary" onClick={() => navigate('/modul3')}>Modul Selanjutnya</button>
        </div>

      </div>
    </div>
  )
}
 
export default Modul2