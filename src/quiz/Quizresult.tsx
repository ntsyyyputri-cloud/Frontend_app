import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Result.css'

interface QuizResultState {
  correct: number
  wrong: number
}

/**
 * QuizResult page
 *
 * Expects navigation state: { correct: number, wrong: number }
 * e.g. navigate('/quiz-result', { state: { correct: 3, wrong: 2 } })
 */
function QuizResult(): React.JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()

  const state = location.state as QuizResultState | null
  const correct = state?.correct ?? 0
  const wrong   = state?.wrong   ?? 0

  return (
    <div className="result-page">
      <div className="result-card">

        {/* Title */}
        <p className="result-title">Kamu telah menyelesaikan quiz!</p>

        {/* Trophy */}
        <div className="result-trophy">🏆</div>

        {/* Score boxes */}
        <div className="result-scores">
          <div className="score-box">
            <span className="score-icon correct">✓</span>
            {String(correct).padStart(2, '0')}&nbsp; Benar
          </div>
          <div className="score-box">
            <span className="score-icon wrong">✕</span>
            {String(wrong).padStart(2, '0')}&nbsp; Salah
          </div>
        </div>

        {/* Back to dashboard */}
        <button
          className="dashboard-button"
          onClick={() => navigate('/beranda')}
        >
          Kembali ke Dashboard &nbsp;→
        </button>

      </div>
    </div>
  )
}

export default QuizResult