import React from 'react'
import './Modul.css'

function Modul2() {
  return (
    <div className="auth-container">

      <h1>Budgeting</h1>

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

      <button className="btn-primary">Quiz Time</button>
      <button className="btn-secondary">Modul Selanjutnya</button>

    </div>
  )
}

export default Modul2