import './quiz2.css'

import finedu_icon from '../Assets/FinEdu+logo.png'

function App() {
  return (
    <div className="container">
      <div className="header">
        <button className="back-btn">←</button>
        <img src={finedu_icon} alt=""/>
        <h3>FinEdu</h3>
      </div>

      <h2 className="title">Quiz</h2>

      {/* Question 1 */}
      <div className="quiz-box">
        <p>Apa yang dimaksud dengan budgeting?</p>

        <label>
          <input type="radio" name="q1" />
          Menghabiskan uang tanpa rencana
        </label>

        <label>
          <input type="radio" name="q1" />
          Proses merencanakan dan mengatur pemasukan serta pengeluaran
        </label>

        <label>
          <input type="radio" name="q1" />
          Membuat daftar belanja
        </label>
      </div>

      {/* Question 2 */}
      <div className="quiz-box">
        <p>Apa tujuan utama dari budgeting</p>

        <label>
          <input type="radio" name="q2" />
          Membuat pengeluaran semakin besar
        </label>

        <label>
          <input type="radio" name="q2" />
          Mengontrol pengeluaran dan mencapai tujuan keuangan
        </label>

        <label>
          <input type="radio" name="q2" />
          Menghabiskan uang lebih cepat
        </label>
      </div>

      {/* Question 3 */}
      <div className="quiz-box">
        <p>Dalam metode 50/30/20, 20% digunakan untuk apa?</p>

        <label>
          <input type="radio" name="q3" />
          Kebutuhan
        </label>

        <label>
          <input type="radio" name="q3" />
          Keinginan
        </label>

        <label>
          <input type="radio" name="q3" />
         Tabungan
        </label>
      </div>

      {/* Question 4 */}
      <div className="quiz-box">
        <p>Manakah yang termasuk komponen budgeting?</p>

        <label>
          <input type="radio" name="q4" />
          Game
        </label>

        <label>
          <input type="radio" name="q4" />
          Pemasukan dan pengeluaran
        </label>

        <label>
          <input type="radio" name="q4" />
          Media sosial
        </label>
      </div>

      {/* Question 5 */}
      <div className="quiz-box">
        <p>Salah satu tips budgeting yang efektif adalah...</p>

        <label>
          <input type="radio" name="q5" />
          Tidak mencatat pengeluaran
        </label>

        <label>
          <input type="radio" name="q5" />
          Mengabaikan kebutuhan
        </label>

        <label>
          <input type="radio" name="q5" />
          Menyisihkan tabungan di awal
        </label>
      </div>

      <button className="submit-btn">selesai</button>
    </div>
  );
}

export default App;