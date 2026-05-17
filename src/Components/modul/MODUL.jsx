import './modul.css'
import finedu_icon from '../Assets/FinEdu+logo.png'

function Modul() {
  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <button className="back-btn">←</button>

        <img src={finedu_icon} alt="FinEdu" />

        <h3>FinEdu+</h3>
      </div>

      {/* Box Modul */}
      <div className="box">
        <h2>Modul 1</h2>
        <p>E-Wallet</p>
      </div>

      <div className="box">
        <h2>Modul 2</h2>
        <p>Budgeting</p>
      </div>

      <div className="box">
        <h2>Modul 3</h2>
        <p>Kontrol Pengeluaran</p>
      </div>

      <div className="box">
        <h2>Modul 4</h2>
        <p>Manajemen Risiko Digital</p>
      </div>

    </div>
  )
}

export default Modul