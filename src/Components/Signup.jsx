import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/nama.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import lahir_icon from '../Assets/kalender.png'
import gender_icon from '../Assets/gender.png'

const LoginSignup = () => {
  return (
     <div className="auth-container">
      <h1>Hello!</h1>
      <p>Daftarkan Akunmu untuk Melanjutkan</p>

      <div className="input-group">
          <img src={user_icon} alt=""/>
        <input type="text" placeholder="Nama" />
      </div>

      <div className="input-group">
          <img src={email_icon} alt=""/>
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-group">
          <img src={password_icon} alt=""/>
        <input type="password" placeholder="Create a Password" />
      </div>

      <div className="input-group">
         <img src={password_icon} alt=""/>
        <input type="password" placeholder="Retype Password" />
      </div>

      <div className="input-group">
          <img src={lahir_icon} alt=""/>
        <input type="date" placeholder="Tanggal Lahir" />
      </div>

      <div className="input-group">
          <img src={gender_icon} alt=""/>
        <input type="text" placeholder="Jenis Kelamin" />
      </div>

      <p className="privacy-text">
        Dengan Menekan Tombol Daftar, Anda Telah Menyetujui Kebijakan Privasi
      </p>

      <button className="btn-primary">Daftar</button>

      <p className="switch-text">
        Sudah Punya Akun? <span>Masuk</span>
      </p>
    </div>
  )
}

export default LoginSignup
