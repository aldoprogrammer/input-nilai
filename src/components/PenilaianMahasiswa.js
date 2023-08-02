import React, { useState } from 'react';

const PenilaianMahasiswa = () => {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const [isDataSaved, setDataSaved] = useState(false);

  const handlePenilaianChange = (aspek, mahasiswa, nilai) => {
    setPenilaian((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...prevPenilaian[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSimpan = () => {
    
    const outputPenilaian = {};

    Object.keys(penilaian).forEach((aspek) => {
      const aspekPenilaian = penilaian[aspek];
      outputPenilaian[aspek] = {};

      Object.keys(aspekPenilaian).forEach((mahasiswa) => {
        outputPenilaian[aspek][`Mahasiswa ${mahasiswa}`] = aspekPenilaian[mahasiswa];
      });
    });
    
    console.log(outputPenilaian);
    setDataSaved(true);
    setTimeout(() => setDataSaved(false), 2000);
  };

  return (
    <div>
      <h2 className='text-center my-4'>Aplikasi Penilaian Mahasiswa</h2>
      <table class="table table-striped">


        <thead>
          <tr>
            <th>Mahasiswa</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {/* Render data penilaian untuk setiap mahasiswa */}
          {/* Misalnya, kita memiliki 10 mahasiswa */}
          {Array.from({ length: 10 }, (_, index) => index + 1).map((mahasiswa) => (
            <tr key={mahasiswa}>
              <td>Mahasiswa {mahasiswa}</td>
              {/* Input nilai penilaian untuk setiap aspek */}
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={penilaian.aspek_penilaian_1[mahasiswa] || ''}
                  onChange={(e) => handlePenilaianChange('aspek_penilaian_1', mahasiswa, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={penilaian.aspek_penilaian_2[mahasiswa] || ''}
                  onChange={(e) => handlePenilaianChange('aspek_penilaian_2', mahasiswa, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={penilaian.aspek_penilaian_3[mahasiswa] || ''}
                  onChange={(e) => handlePenilaianChange('aspek_penilaian_3', mahasiswa, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={penilaian.aspek_penilaian_4[mahasiswa] || ''}
                  onChange={(e) => handlePenilaianChange('aspek_penilaian_4', mahasiswa, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end bottom-0 end-0 p-3">
      <button onClick={handleSimpan} className='btn btn-warning'>Tombol Simpan</button>
      </div>
      {isDataSaved && (
        <div className="alert alert-success position-fixed top-0 end-0 m-4" role="alert">
          Data telah disimpan
        </div>
      )}
    </div>
  );
};

export default PenilaianMahasiswa;
