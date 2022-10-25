import React, { useEffect } from 'react';
import './Card.css';

function Card(props) {
  useEffect(() => {
    alert('Kartu Nama Ditampilkan');
    return () => {
      alert('Kartu Nama akan dihapus');
    };
  }, []);
  return (
    <div className="card">
      {/* <img src="avatar.png" alt="Avatar" /> */}
      <div className="container">
        {/* <h4>{props.nama}</h4> */}
        <p>Nama Lengkap: {props.nama_lengkap}</p>
        <p>Nama Panggilan: {props.nama_panggilan}</p>
        <p>Nomor Telepon: {props.nomor_telepon}</p>
        <p>Id Line: {props.id_line}</p>
        <p>Tanggal Lahir: {props.tanggal_lahir}</p>
        <p>NIM: {props.nim}</p>
        <p>Email: {props.email}</p>
        <p>Hobi: {props.hobi}</p>
        {/* <p style={{ whiteSpace: "pre" }}>blablaba</p> */}
      </div>
    </div>
  );
}

export default Card;
