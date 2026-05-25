import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './quiz4.css'

import Safety from '../assets/keamanan.png'

interface Question {
  id: string
  text: string
  options: string[]
  correct: string
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'Apa yang dimaksud dengan manajemen resiko digital?',
    options: [
      'Menggunakan teknologi tanpa aturan',
      'Proses mengidentifikasi dan mengurangi resiko dalam penggunaan teknologi digital',
      'Menyimpan data sembarangan',
    ],
    correct: 'Proses mengidentifikasi dan mengurangi resiko dalam penggunaan teknologi digital',
  },
  {
    id: 'q2',
    text: 'Apa tujuan utama manajemen resiko digital?',
    options: [
      'Menambah resiko digital',
      'Melindungi data dan informasi',
      'Membuat akun baru',
    ],
    correct: 'Melindungi data dan informasi',
  },
  {
    id: 'q3',
    text: 'Salah satu cara melakukan manajemen resiko digital adalah...',
    options: [
      'Menggunakan password yang lemah',
      'Mengklik semua link yang masuk',
      'Menggunakan password yang kuat',
    ],
    correct: 'Menggunakan password yang kuat',
  },
  {
    id: 'q4',
    text: 'Mengapa penting menghindari link yang mencurigakan?',
    options: [
      'Agar internet lebih cepat',
      'Untuk menghindari ancaman seperti penipuan',
      'Agar bisa membuka semua situs',
    ],
    correct: 'Untuk menghindari ancaman seperti penipuan',
  },
  {
    id: 'q5',
    text: 'Apa manfaat dari manajemen resiko digital?',
    options: [
      'Data mudah bocor',
      'Terhindar dari penipuan online',
      'Akun menjadi tidak aman',
    ],
    correct: 'Terhindar dari penipuan online',
  },
]

function Quiz4(): React.JSX.Element {
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
        <img src={Safety} alt="Manajemen Resiko Digital" className="header-icon" />
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

export default Quiz4