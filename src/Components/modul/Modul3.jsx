import React from 'react'
import './Modul.css'

function Modul3() {
  return (
    <div className="auth-container">

      <h1>Kontrol Pengeluaran</h1>

      <div className="box">
        <p>
          Kontrol pengeluaran adalah cara mengatur dan membatasi
          pengeluaran agar tidak melebihi pemasukan.
        </p>
      </div>

      <div className="box">
        <h2>~ Tujuan</h2>
        <p>
          - Menghindari pemborosan <br />
          - Menjaga keuangan tetap stabil
        </p>
      </div>

      <div className="box">
        <h2>~ Cara Melakukan</h2>
        <p>
          - Catat semua pengeluaran <br />
          - Bedakan kebutuhan dan keinginan <br />
          - Buat batas anggaran
        </p>
      </div>

      <div className="box">
        <h2>~ Metode Budgeting Populer</h2>
        <p>
          - 50/30/20 Rule <br />
          - Budgeting harian/bulanan <br />
          - Sistem amplop
        </p>
      </div>

      <div className="box">
        <h2>~ Manfaat</h2>
        <p>
          - Uang lebih terkontrol <br />
          - Bisa menabung lebih banyak
        </p>
      </div>

      <button className="btn-primary">Quiz Time</button>
      <button className="btn-secondary">Modul Selanjutnya</button>

    </div>
  )
}

export default Modul3