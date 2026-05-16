import './quiz3.css'

import finedu_icon from '../Assets/FinEdu+logo.png'

function App() {
  return (
    <div className="container">
      <div className="header">
        <button className="back-btn">←</button>
        <img src={finedu_icon} alt=""/>
        <h3>FinEdu+</h3>
      </div>

      <h2 className="title">Quiz</h2>

      {/* Question 1 */}
      <div className="quiz-box">
        <p>Apa yang dimaksud dengan kontrol pengeluaran?</p>

        <label>
          <input type="radio" name="q1" />
          Menghabiskan uang tanpa batas
        </label>

        <label>
          <input type="radio" name="q1" />
         Mengatur dan membatasi pengeluaran agar tidak melebihi pemasukan
        </label>

        <label>
          <input type="radio" name="q1" />
         Menyimpan uang di rumah
        </label>
      </div>

      {/* Question 2 */}
      <div className="quiz-box">
        <p>Apa tujuan utama kontrol pengeluaran</p>

        <label>
          <input type="radio" name="q2" />
          Menambah pengeluaran
        </label>

        <label>
          <input type="radio" name="q2" />
          Menghindari pemborosan
        </label>

        <label>
          <input type="radio" name="q2" />
          Mengurangi pemasukan
        </label>
      </div>

      {/* Question 3 */}
      <div className="quiz-box">
        <p>Salah satu cara mengontrol pengeluaran adalah...</p>

        <label>
          <input type="radio" name="q3" />
          Tidak mencatat pengeluaran
        </label>

        <label>
          <input type="radio" name="q3" />
         Mengabaikan anggaran
        </label>

        <label>
          <input type="radio" name="q3" />
          Mencatat semua pengeluaran
        </label>
      </div>

      {/* Question 4 */}
      <div className="quiz-box">
        <p>Mengapa penting membedakan kebutuhan dan keinginan?</p>

        <label>
          <input type="radio" name="q4" />
          Agar bisa boros
        </label>

        <label>
          <input type="radio" name="q4" />
         Agar pengeluaran lebih terkontrol
        </label>

        <label>
          <input type="radio" name="q4" />
         Agar uang cepat habis
        </label>
      </div>

      {/* Question 5 */}
      <div className="quiz-box">
        <p>Apa manfaat dari kontrol pengeluaran?</p>

        <label>
          <input type="radio" name="q5" />
          Uang lebih terkontrol dan bisa menabung
        </label>

        <label>
          <input type="radio" name="q5" />
          Tidak bisa menabung
        </label>

        <label>
          <input type="radio" name="q5" />
         Pengeluaran semakin besar
        </label>
      </div>

      <button className="submit-btn">selesai</button>
    </div>
  );
}

export default App;