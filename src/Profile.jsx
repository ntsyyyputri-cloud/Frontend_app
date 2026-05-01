import React, { useState } from 'react';
import './index.css'; // pastikan file CSS ada

function Profile() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini kamu bisa tambahkan logika submit, misalnya kirim ke server
    console.log({ nama, email, tanggalLahir, jenisKelamin });
  };

  return (
    <div className="profile">
      <h1>Profil</h1>
      <img src="foto.jpg" alt="Profile" className="profile-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="profile-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="profile-input"
          required
        />
        <input
          type="date"
          placeholder="Tanggal Lahir"
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
          className="profile-input"
          required
        />
        <input
          type="text"
          placeholder="Jenis Kelamin"
          value={jenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
          className="profile-input"
          required
        />
        <button type="submit" className="profile-button">
          Sertifikat
        </button>
      </form>
      <div className="bottom-nav">
        <button className="nav-item">Home</button>
        <button className="nav-item">History</button>
        <button className="nav-item active">Profile</button>
      </div>
    </div>
  );
}

export default Profile;