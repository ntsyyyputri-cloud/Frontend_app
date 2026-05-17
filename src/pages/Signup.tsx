import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginSignup.css'
 
import user_icon from '../assets/nama.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import lahir_icon from '../assets/kalender.png'
import gender_icon from '../assets/gender.png'
 
function Signup() {
  const navigate = useNavigate()
 
  return (
    <div className="auth-container">
      <h1>Hello!</h1>
      <p>Daftarkan Akunmu <br /> untuk Melanjutkan</p>
 
      <div className="input-group">
        <img src={user_icon} alt="nama" className="input-icon" />
        <input type="text" placeholder="Nama" maxLength={100} />
      </div>
 
      <div className="input-group">
        <img src={email_icon} alt="email" className="input-icon" />
        <input type="email" placeholder="Email" maxLength={100} />
      </div>
 
      <div className="input-group">
        <img src={password_icon} alt="password" className="input-icon" />
        <input type="password" placeholder="Create a Password" maxLength={100} />
      </div>
 
      <div className="input-group">
        <img src={password_icon} alt="retype password" className="input-icon" />
        <input type="password" placeholder="Retype Password" maxLength={100} />
      </div>
 
      <div className="input-group">
        <img src={lahir_icon} alt="tanggal lahir" className="input-icon" />
        <input type="date" placeholder="Tanggal Lahir" />
      </div>
 
      <div className="input-group">
        <img src={gender_icon} alt="jenis kelamin" className="input-icon" />
        <input type="text" placeholder="Jenis Kelamin" maxLength={100} />
      </div>
 
      <p className="privacy-text">
        Dengan Menekan Tombol Daftar, Anda Telah Menyetujui{' '}
        <strong>Kebijakan Privasi</strong>
      </p>
 
      <button className="btn-primary" onClick={() => navigate('/login')}>
        Daftar
      </button>
 
      <p className="switch-text">
        Sudah Punya Akun?{' '}
        <span onClick={() => navigate('/login')}>Masuk</span>
      </p>
    </div>
  )
}
 
export default Signup
