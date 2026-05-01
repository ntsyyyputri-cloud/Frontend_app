import React from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function Login() {
  return (
    <div>
      <div className="auth-container">
      <h1>Hello!</h1>
      <p>Masukan Informasi Berikut untuk Masuk</p>

      <div className="input-group">
        <img src={email_icon} alt=""/>
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-group">
      <img src={password_icon} alt=""/>
        <input type="password" placeholder="Password" />
      </div>

      <button className="btn-primary">Masuk</button>

      <p className="switch-text">
        Tidak Punya Akun? <span>Daftar</span>
      </p>
    </div>
    </div>
  )
}

export default Login
