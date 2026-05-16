import './quiz1.css'

import finedu_icon from '../Assets/FinEdu+logo.png'
//ganti funtion jd quiz
function quiz1() {
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
        <p>Apa yang dimaksud dengan e-wallet?</p>

        <label>
          <input type="radio" name="q1" />
          Alat untuk menyimpan uang fisik
        </label>

        <label>
          <input type="radio" name="q1" />
          Aplikasi dompet digital
        </label>

        <label>
          <input type="radio" name="q1" />
          Alat pembayaran tunai
        </label>
      </div>

      {/* Question 2 */}
      <div className="quiz-box">
        <p>Salah satu fungsi e-wallet adalah...</p>

        <label>
          <input type="radio" name="q2" />
          Menyimpan dokumen
        </label>

        <label>
          <input type="radio" name="q2" />
          Mengedit foto
        </label>

        <label>
          <input type="radio" name="q2" />
          Membeli sayuran
        </label>
      </div>

      {/* Question 3 */}
      <div className="quiz-box">
        <p>Apa salah satu keunggulan e-wallet?</p>

        <label>
          <input type="radio" name="q3" />
          Hanya bisa dipakai di luar negeri
        </label>

        <label>
          <input type="radio" name="q3" />
          Transaksi cepat
        </label>

        <label>
          <input type="radio" name="q3" />
          Boros penggunaan
        </label>
      </div>

      {/* Question 4 */}
      <div className="quiz-box">
        <p>Berikut ini yang merupakan tips aman menggunakan e-wallet adalah...</p>

        <label>
          <input type="radio" name="q4" />
          Tidak menjaga kode OTP
        </label>

        <label>
          <input type="radio" name="q4" />
          Login di semua perangkat umum
        </label>

        <label>
          <input type="radio" name="q4" />
          Menjaga kode OTP rahasia
        </label>
      </div>

      {/* Question 5 */}
      <div className="quiz-box">
        <p>Apa salah satu kekurangan dari penggunaan e-wallet?</p>

        <label>
          <input type="radio" name="q5" />
          Tidak memerlukan internet
        </label>

        <label>
          <input type="radio" name="q5" />
          Bergantung pada koneksi internet
        </label>

        <label>
          <input type="radio" name="q5" />
          Tidak praktis digunakan
        </label>
      </div>

      <button className="submit-btn">selesai</button>
    </div>
  );
}

export default quiz1;