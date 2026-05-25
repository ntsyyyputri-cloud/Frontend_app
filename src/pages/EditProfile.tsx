import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';
import Profile from '../assets/man.png';

export default function EditProfile(): JSX.Element {
  const navigate = useNavigate();

  const [nama, setNama]                   = useState<string>('');
  const [tanggalLahir, setTanggalLahir]   = useState<string>('');
  const [gender, setGender]               = useState<string>('');

  const handleSimpan = (): void => {
    // TODO: persist to your API / store
    console.log({ nama, tanggalLahir, gender });
    navigate('/profile');
  };

  return (
    <div className="edit-profile-page">

      {/* ── Header banner ── */}
      <div className="edit-profile-header">
        <div className="edit-profile-header-text">
          <h1 className="edit-profile-title">Profil Saya</h1>
          <p className="edit-profile-subtitle">Kelola informasi Profil Anda</p>
        </div>
        <div className="edit-profile-illustration">
          <img src={Profile} alt="Profile illustration" />
        </div>
      </div>

      {/* ── Form ── */}
      <div className="edit-profile-form">
        <div className="edit-profile-field">
          <label className="field-label">Nama</label>
          <input
            className="field-input"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            maxLength={100}
          />
        </div>

        <div className="edit-profile-field">
          <label className="field-label">Tanggal Lahir</label>
          <input
            className="field-input"
            type="date"
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
          />
        </div>

        <div className="edit-profile-field">
          <label className="field-label">Gender</label>
          <input
            className="field-input"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            maxLength={50}
          />
        </div>
      </div>

      {/* ── Simpan button ── */}
      <div className="edit-profile-footer">
        <button className="simpan-btn" onClick={handleSimpan}>
          Simpan
        </button>
      </div>

    </div>
  );
}