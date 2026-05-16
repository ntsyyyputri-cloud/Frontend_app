import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginSignup.css'
 
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
 
function Login() {
  const navigate = useNavigate()
 
  return (
    <div className="auth-container">
      <h1>Hello!</h1>
      <p>Masukan Informasi <br /> Berikut untuk Masuk</p>
 
      <div className="input-group">
        <img src={email_icon} alt="email" className="input-icon" />
        <input type="email" placeholder="Email" maxLength={100} />
      </div>
 
      <div className="input-group">
        <img src={password_icon} alt="password" className="input-icon" />
        <input type="password" placeholder="Password" maxLength={100} />
      </div>
 
      <button className="btn-primary" onClick={() => navigate('/beranda')}>
        Masuk
      </button>
 
      <p className="switch-text">
        Tidak Punya Akun?{' '}
        {/* ✅ Fixed: lowercase /signup to match route */}
        <span onClick={() => navigate('/signup')}>Daftar</span>
      </p>
    </div>
  )
}
 
export default Login