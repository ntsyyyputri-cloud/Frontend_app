import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './quiz3.css'

import Pengeluaran from '../assets/pengeluaran.png'

interface Question {
  id: string
  text: string
  options: string[]
  correct: string
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'Apa yang dimaksud dengan kontrol pengeluaran?',
    options: [
      'Menghabiskan uang tanpa batas',
      'Mengatur dan membatasi pengeluaran agar tidak melebihi pemasukan',
      'Menyimpan uang di rumah',
    ],
    correct: 'Mengatur dan membatasi pengeluaran agar tidak melebihi pemasukan',
  },
  {
    id: 'q2',
    text: 'Apa tujuan utama kontrol pengeluaran?',
    options: [
      'Menambah pengeluaran',
      'Menghindari pemborosan',
      'Mengurangi pemasukan',
    ],
    correct: 'Menghindari pemborosan',
  },
  {
    id: 'q3',
    text: 'Salah satu cara mengontrol pengeluaran adalah..',
    options: [
      'Tidak mencatat pengeluaran',
      'Mengabaikan anggaran',
      'Mencatat semua pengeluaran',
    ],
    correct: 'Mencatat semua pengeluaran',
  },
  {
    id: 'q4',
    text: 'Mengapa penting membedakan kebutuhan dan keinginan?',
    options: [
      'Agar bisa boros',
      'Agar pengeluaran lebih terkontrol',
      'Agar uang cepat habis',
    ],
    correct: 'Agar pengeluaran lebih terkontrol',
  },
  {
    id: 'q5',
    text: 'Apa manfaat dari kontrol pengeluaran?',
    options: [
      'Uang lebih terkontrol dan bisa menabung',
      'Tidak bisa menabung',
      'Pengeluaran semakin besar',
    ],
    correct: 'Uang lebih terkontrol dan bisa menabung',
  },
]

function Quiz3(): React.JSX.Element {
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
        <img src={Pengeluaran} alt="Kontrol Pengeluaran" className="header-icon" />
        <span className="header-title">Quiz</span>
      </div>

      <div className="quiz-content">
        {questions.map((q) => {
          const isUnanswered = showWarning && !answers[q.id]
          return (
            <div
              className="question-block"
              key={q.id}
              ref={el => { questionRefs.current[q.id] = el }}
            >
              {isUnanswered && (
                <p className="question-warning">Isi Pertanyaan Ini Dahulu</p>
              )}
              <div className={`question-text${isUnanswered ? ' unanswered' : ''}`}>
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
                    {opt}
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

export default Quiz3