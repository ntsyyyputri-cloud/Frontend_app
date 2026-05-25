import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modul1.css'

import topiLogo from '../../assets/wallet.png'
import backIcon  from '../../assets/back.svg'

function Modul1() {
  const navigate = useNavigate()

  return (
    <div className="modul-detail-container">

      {/* ── Header ── */}
      <div className="modul-detail-header">
        <img
          src={backIcon}
          alt="Back"
          className="back-btn"
          onClick={() => navigate('/modul')}
        />
        <img src={topiLogo} alt="E-Wallet" className="header-logo" />
        <span className="header-brand">E-Wallet</span>
      </div>

      {/* ── Content: wallet.png passed as CSS custom property for watermark ── */}
      <div className="modul-content" style={{ '--watermark-img': `url(${topiLogo})` } as React.CSSProperties}>

        <div className="box">
          <h2>Pengertian E - Wallet</h2>
          <p>
            E-wallet (electronic wallet) adalah aplikasi digital yang digunakan untuk menyimpan uang
            secara elektronik dan melakukan berbagai transaksi non-tunai melalui smartphone atau
            perangkat lain.
          </p>
        </div>

        <div className="box">
          <h2>Fungsi E - Wallet</h2>
          <ul>
            <li>Pembayaran belanja (online &amp; offline)</li>
            <li>Transfer uang antar pengguna</li>
            <li>Pembayaran tagihan (listrik, air, internet)</li>
            <li>Pembelian pulsa dan paket data</li>
            <li>Menyimpan saldo secara digital</li>
          </ul>
        </div>

        <div className="box">
          <h2>Keunggulan E - Wallet</h2>
          <ul>
            <li>Praktis dan cepat (tanpa uang tunai)</li>
            <li>Transaksi bisa dilakukan kapan saja</li>
            <li>Banyak promo dan cashback</li>
            <li>Lebih aman dengan PIN atau biometrik</li>
          </ul>
        </div>

        <div className="box">
          <h2>Kekurangan E - Wallet</h2>
          <ul>
            <li>Bergantung pada internet</li>
            <li>Risiko kebocoran data jika tidak hati-hati</li>
            <li>Bisa mendorong perilaku konsumtif</li>
          </ul>
        </div>

        <div className="box">
          <h2>Tips Penggunaan E-Wallet dengan Aman</h2>
          <ul>
            <li>Jangan bagikan kode OTP kepada siapa pun</li>
            <li>Gunakan PIN yang kuat</li>
            <li>Aktifkan verifikasi dua langkah</li>
            <li>Hindari login di perangkat umum</li>
          </ul>
        </div>

        {/* ── Buttons ── */}
        <div className="btn-row">
          <button className="btn-primary" onClick={() => navigate('/quiz1')}>
            Quiz time
          </button>
          <button className="btn-secondary" onClick={() => navigate('/modul2')}>
            Modul Selanjutnya
          </button>
        </div>

      </div>
    </div>
  )
}

export default Modul1