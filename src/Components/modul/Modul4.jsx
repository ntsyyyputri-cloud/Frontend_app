import React from 'react'
import './Modul.css'

function Modul4() {
  return (
    <div className="auth-container">

      <h1>Manajemen Risiko Digital</h1>

      <div className="box">
        <p>
          Manajemen risiko digital adalah proses mengidentifikasi,
          menganalisis, dan mengurangi risiko yang terjadi
          dalam penggunaan teknologi digital.
        </p>
      </div>

      <div className="box">
        <h2>~ Tujuan</h2>
        <p>
          - Melindungi data dan informasi <br />
          - Mengurangi ancaman keamanan digital
        </p>
      </div>

      <div className="box">
        <h2>~ Cara Melakukan</h2>
        <p>
          - Gunakan password yang kuat <br />
          - Update aplikasi secara rutin <br />
          - Hindari link mencurigakan
        </p>
      </div>

      <div className="box">
        <h2>~ Manfaat</h2>
        <p>
          - Data lebih aman <br />
          - Terhindar dari penipuan online
        </p>
      </div>

      <button className="btn-primary">Quiz Time</button>
      <button className="btn-secondary">Modul Selanjutnya</button>

    </div>
  )
}

export default Modul4