import { useState } from 'react';
import './Profile.css';
import { useNavigate} from 'react-router-dom';
import Profil from '../assets/gender.png';

import backIcon   from '../assets/back.svg'

export default function Profile(): JSX.Element {
  const navigate = useNavigate();
  const [nama]         = useState<string>('Vokasioner');
  const [email]        = useState<string>('vokasioner@gmail.com');
  const [tanggalLahir] = useState<string>('04/09/07');
  const [jenisKelamin] = useState<string>('Perempuan');

  return (
    <div className="profile-page">
      {/* Purple banner */}
      <div className="profile-banner">
        <div className="profile-banner__overlay" />
        <div className="profile-banner__noise" />
         <img
            src={backIcon}
            alt="Back"
            className="back-btn"
            onClick={() => navigate('/beranda')}
          />
      </div>

      {/* Avatar + Edit button row */}
      <div className="profile-avatar-row">
        <div className="profile-avatar">
          <img src={Profil} alt="Profile" />
        </div>

        <button
          className="edit-btn"
          onClick={() => navigate('/edit-profile')}
        >
          Edit Profil
        </button>
      </div>

      {/* Name */}
      <h1 className="profile-name">{nama}</h1>

      {/* Divider */}
      <div className="profile-divider" />

      {/* Info row */}
      <div className="profile-info-row">
        <div className="profile-info-item">
          <span className="info-label">Email</span>
          <span className="info-value info-value--email">{email}</span>
        </div>
        <div className="profile-info-item">
          <span className="info-label">Tanggal Lahir</span>
          <span className="info-value">{tanggalLahir}</span>
        </div>
        <div className="profile-info-item">
          <span className="info-label">Gender</span>
          <span className="info-value">{jenisKelamin}</span>
        </div>
      </div>
    </div>
  );
}