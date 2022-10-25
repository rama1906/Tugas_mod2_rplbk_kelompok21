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
      <img src="avatar.png" alt="Avatar" />
      <div className="container">
        <h4>{props.nama}</h4>
        <p>Kelompok {props.kelompok}</p>
      </div>
    </div>
  );
}
export default Card;
