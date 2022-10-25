import React, { useEffect } from 'react';
import './Form.css';

const finddata = (mhs_data, data_search) => {
  let res;
  var mhs;
  res = mhs_data.filter((mhs) => {
    const lower = Object.values(mhs).map((val) => val.toString().toLowerCase());
    return (
      lower.findIndex((val) => val.includes(data_search.toLowerCase())) !== -1
    );
  });
  if (res.length === 0) {
    console.log("Data tidak ditemukan");
  } else if (res.length > 1) {
    console.log("Beberapa data ditemukan, mohon lebih spesifik");
  } else {
    mhs = res[0];
  }
  console.log(res);
  return res;
};

function Form(props) {
  const [nama, setNama] = React.useState('');
  const [kelompok, setKelompok] = React.useState('');
  const [namaIsValid, setNamaIsValid] = React.useState(null);
  const [kelompokIsValid, setKelompokIsValid] = React.useState(null);
  const [formIsValid, setFormIsValid] = React.useState(false);
  const data_url =
    "https://gist.githubusercontent.com/d4em0n/aa26675e79cacd3dfcfab1552e3ae37e/raw/997b218a855f76aad5e319aaee65f636d235b1e9/data_aegis.txt";
  useEffect(() => {
    console.log("Dipanggil nih bos");
    fetch(data_url)
      .then((result) => {
        return result.text();
      })
      .then((text) => {
        console.log(text);
        setDataMhs(eval(text));
      });
  }, []);
  
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log({ nama, kelompok });
      props.onAddPraktikan({
        nama: nama,

        kelompok: kelompok,
      });

      //* Reset form
      setNama('');
      setKelompok('');
    } else {
      alert('Form tidak valid');
    }
  };
  useEffect(() => {
    // Similiar to componentDidMount andcomponentDidUpdate:

    //? This is called after the first render andafter every update

    setFormIsValid(namaIsValid && kelompokIsValid);
    console.log(`${Form.name}: ${formIsValid}`);
  }, [namaIsValid, kelompokIsValid]);
  const changeNamaHandler = (event) => {
    //* Set the value of the nama input to the valueof the input

    setNamaIsValid(event.target.value.trim().length > 0);

    setNama(event.target.value);
  };
  const changeKelompokHandler = (event) => {
    //* Set the value of the kelompok input to thevalue of the input
    setKelompokIsValid(event.target.value.trim().length > 0);

    setKelompok(event.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="nama">Nama</label>
        <input className={namaIsValid === false ? 'invalid' : ''} autoComplete="off" type="text" id="nama" nama="nama" value={nama} onChange={changeNamaHandler} onBlur={changeNamaHandler} />
        <label htmlFor="kelompok">Kelompok</label>
        <input className={kelompokIsValid === false ? 'invalid' : ''} autoComplete="off" type="number" id="kelompok" nama="kelompok" value={kelompok} onChange={changeKelompokHandler} onBlur={changeKelompokHandler} />
        <button type="submit">Buat Kartu Praktikan</button>
      </form>
    </>
  );
}
export default Form;
