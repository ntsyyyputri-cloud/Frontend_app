import React from 'react'
import './StatusBar.css'

function StatusBar() {
  const now = new Date()
  const jam = now.getHours().toString().padStart(2, '0')
  const menit = now.getMinutes().toString().padStart(2, '0')

  return (
    <div className="status-bar">
      <span className="status-time">{jam}:{menit}</span>
      <div className="status-icons">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="3" width="3" height="9" rx="1" fill="white"/>
          <rect x="4.5" y="2" width="3" height="10" rx="1" fill="white"/>
          <rect x="9" y="1" width="3" height="11" rx="1" fill="white"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="white"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.6C9.8 3.6 11.4 4.3 12.6 5.4L14 4C12.4 2.5 10.3 1.6 8 1.6C5.7 1.6 3.6 2.5 2 4L3.4 5.4C4.6 4.3 6.2 3.6 8 3.6Z" fill="white"/>
          <path d="M8 6.8C9.1 6.8 10.1 7.2 10.8 7.9L12.2 6.5C11.1 5.5 9.6 4.8 8 4.8C6.4 4.8 4.9 5.5 3.8 6.5L5.2 7.9C5.9 7.2 6.9 6.8 8 6.8Z" fill="white"/>
          <circle cx="8" cy="10.5" r="1.5" fill="white"/>
        </svg>
        <div className="status-battery">
          <div className="battery-body">
            <div className="battery-fill"></div>
          </div>
          <div className="battery-tip"></div>
        </div>
      </div>
    </div>
  )
}

export default StatusBar
