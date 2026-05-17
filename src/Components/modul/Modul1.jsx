import React from 'react'
import './Modul1.css'

function Modul1() {
  return (
    <div className="auth-container">

      <h1>E-Wallet</h1>

      <div className="box">
        <h2>~Pengertian E-Wallet</h2>
        <p>
          E-Wallet (electronic wallet) adalah aplikasi digital yang digunakan
          untuk menyimpan uang secara elektronik dan melakukan berbagai
          transaksi non-tunai melalui smartphone atau perangkat lain.
        </p>
      </div>

      <div className="box">
        <h2>~Fungsi E-Wallet</h2>
        <ul>
          <li>Pembayaran belanja (online & offline)</li>
          <li>Transfer uang antar pengguna</li>
          <li>Pembayaran tagihan</li>
          <li>Pembelian pulsa dan paket data</li>
          <li>Menyimpan saldo secara digital</li>
        </ul>
      </div>

      <div className="box">
        <h2>~Keunggulan E-Wallet</h2>
        <ul>
          <li>Praktis dan cepat</li>
          <li>Transaksi kapan saja</li>
          <li>Banyak promo dan cashback</li>
          <li>Lebih aman dengan PIN</li>
        </ul>
      </div>

      <div className="box">
        <h2>~Kekurangan E-Wallet</h2>
        <ul>
          <li>Bergantung pada internet</li>
          <li>Risiko kebocoran data</li>
          <li>Bisa mendorong perilaku konsumtif</li>
        </ul>
      </div>

      <div className="box">
        <h2>~Tips Menggunakan E-Wallet dengan Aman</h2>
        <ul>
          <li>Jangan bagikan kode OTP</li>
          <li>Gunakan PIN yang kuat</li>
          <li>Aktifkan verifikasi dua langkah</li>
          <li>Hindari login di perangkat umum</li>
        </ul>
      </div>

      <button className="btn-primary">Quiz Time</button>
      <button className="btn-secondary">Modul Selanjutnya</button>

    </div>
  )
}

export default Modul1