import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './quiz1.css'

import Wallet from '../assets/wallet.png'

interface Question {
  id: string
  text: string
  options: string[]
  correct: string
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'Apa yang dimaksud dengan e-wallet?',
    options: [
      'Alat untuk menyimpan uang fisik',
      'Aplikasi dompet digital',
      'Alat pembayaran tunai',
    ],
    correct: 'Aplikasi dompet digital',
  },
  {
    id: 'q2',
    text: 'Salah satu fungsi e-wallet adalah...',
    options: [
      'Menyimpan dokumen',
      'Mengedit foto',
      'Pembayaran tagihan listrik, air, internet',
    ],
    correct: 'Pembayaran tagihan listrik, air, internet',
  },
  {
    id: 'q3',
    text: 'Apa salah satu keunggulan e-wallet?',
    options: [
      'Hanya bisa dipakai di luar negeri',
      'Transaksi cepat dan praktis',
      'Boros penggunaan',
    ],
    correct: 'Transaksi cepat dan praktis',
  },
  {
    id: 'q4',
    text: 'Berikut ini yang merupakan tips aman menggunakan e-wallet adalah...',
    options: [
      'Tidak menjaga kode OTP',
      'Login di semua perangkat umum',
      'Menjaga kode OTP rahasia',
    ],
    correct: 'Menjaga kode OTP rahasia',
  },
  {
    id: 'q5',
    text: 'Apa salah satu kekurangan dari penggunaan e-wallet?',
    options: [
      'Tidak memerlukan internet',
      'Bergantung pada koneksi internet',
      'Tidak praktis digunakan',
    ],
    correct: 'Bergantung pada koneksi internet',
  },
]

function Quiz1(): React.JSX.Element {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showWarning, setShowWarning] = useState<boolean>(false)
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleSelect = (qId: string, option: string): void => {
    setAnswers(prev => ({ ...prev, [qId]: option }))
  }

  const handleSelesai = (): void => {
    const unanswered = questions.filter(q => !answers[q.id])
    if (unanswered.length > 0) {
      setShowWarning(true)
      const firstId = unanswered[0].id
      questionRefs.current[firstId]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    const correct = questions.filter(q => answers[q.id] === q.correct).length
    const wrong   = questions.length - correct
    navigate('/quiz-result', { state: { correct, wrong } })
  }

  return (
    <div className="quiz-container">

      {/* ── Header ── */}
      <div className="quiz-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <img src={Wallet} alt="E-Wallet" className="header-icon" />
        <span className="header-title">Quiz</span>
      </div>

      {/* ── Questions ── */}
      <div className="quiz-content">
        {questions.map((q, index) => {
          const isUnanswered = showWarning && !answers[q.id]
          return (
            <div
              className={`question-block${isUnanswered ? ' unanswered' : ''}`}
              key={q.id}
              ref={el => { questionRefs.current[q.id] = el }}
            >
              {isUnanswered && (
                <p className="question-warning">Isi Pertanyaan Ini Dahulu</p>
              )}
              <div className="question-text">
                {q.text}
              </div>
              <div className="options-list">
                {q.options.map((opt) => (
                  <label className="option-label" key={opt}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleSelect(q.id, opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )
        })}

       <button className="finish-button" onClick={() => navigate('/result')}>
            Selesai
          </button>
      </div>
    </div>
  )
}

export default Quiz1