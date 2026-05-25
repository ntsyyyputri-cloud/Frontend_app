import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './quiz2.css'

import Budget from '../assets/budgeting.png'

interface Question {
  id: string
  text: string
  options: string[]
  correct: string
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'Apa yang dimaksud dengan budgeting?',
    options: [
      'Menghabiskan uang tanpa rencana',
      'Proses merencanakan dan mengatur pemasukan serta pengeluaran',
      'Membuat daftar belanja',
    ],
    correct: 'Proses merencanakan dan mengatur pemasukan serta pengeluaran',
  },
  {
    id: 'q2',
    text: 'Manakah yang termasuk komponen budgeting?',
    options: [
      'Game',
      'Pemasukan dan Pengeluaran',
      'Media sosial',
    ],
    correct: 'Pemasukan dan Pengeluaran',
  },
  {
    id: 'q3',
    text: 'Salah satu tips budgeting yang efektif adalah..',
    options: [
      'Tidak mencatat pengeluaran',
      'Mengabaikan kebutuhan',
      'Menyisihkan tabungan di awal',
    ],
    correct: 'Menyisihkan tabungan di awal',
  },
  {
    id: 'q4',
    text: 'Apa tujuan utama dari budgeting?',
    options: [
      'Membuat pengeluaran semakin besar',
      'Mengontrol pengeluaran dan mencapai tujuan keuangan',
      'Menghabiskan uang lebih cepat',
    ],
    correct: 'Mengontrol pengeluaran dan mencapai tujuan keuangan',
  },
  {
    id: 'q5',
    text: 'Dalam metode 50/30/20, 20% digunakan untuk apa?',
    options: [
      'Kebutuhan',
      'Keinginan',
      'Tabungan',
    ],
    correct: 'Tabungan',
  },
]

function Quiz2(): React.JSX.Element {
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
      <div className="quiz-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <img src={Budget} alt="Budgeting" className="header-icon" />
        <span className="header-title">Quiz</span>
      </div>

      <div className="quiz-content">
        {questions.map((q) => {
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

export default Quiz2