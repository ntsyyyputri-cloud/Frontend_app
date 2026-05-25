import { useNavigate } from 'react-router-dom'
import Trophy from '../assets/trophy.png'   // ← swap with your own image
import './Selesai.css'
import type { JSX } from 'react'

export function Selesai(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="selesai-page">
      <img
        src={Trophy}
        alt="Selesai"
        className="selesai-img"
      />

      <h1 className="selesai-title">Kamu telah menyelesaikan Simulasi</h1>
      <p className="selesai-subtitle">Terima Kasih</p>

      <button
        className="selesai-btn"
        onClick={() => navigate('/beranda')}
      >
        Kembali ke Dashboard &nbsp;→
      </button>
    </div>
  )
}

export default Selesai