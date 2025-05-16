import React, { useState, useEffect, useRef } from 'react';
import Gafete from './Gafete';
import './GafeteGeneratorPage.css';
import html2canvas from 'html2canvas';

const GafeteGeneratorPage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [personalInput, setPersonalInput] = useState('');
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [imagenURL, setImagenURL] = useState('');
  const [imgScale, setImgScale] = useState(1);
  const [imgPosX, setImgPosX] = useState(50);
  const [imgPosY, setImgPosY] = useState(50);
  const gafeteRef = useRef();

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
  
    fetch(`${apiUrl}/personal`)
      .then(res => res.json())
      .then(data => setEmpleados(data))
      .catch(err => console.error("Error al cargar empleados", err));
  }, []);
  

  useEffect(() => {
    const encontrado = empleados.find(emp => emp.PERSONAL?.toString() === personalInput);
    if (encontrado) {
      setEmpleadoSeleccionado({
        nombre: encontrado.NOMBRE,
        apellido1: encontrado.APELLIDOPATERNO,
        apellido2: encontrado.APELLIDOMATERNO,
        puesto: encontrado.PUESTO,
        curp: encontrado.CURP,
        imss: encontrado.IMSS,
        numControl: encontrado.PERSONAL,
        estatus: encontrado.ESTATUS,
        foto: imagenURL || '/img/empleado.jpg'
      });
    } else {
      setEmpleadoSeleccionado(null);
    }
  }, [personalInput, empleados, imagenURL]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadJPEG = async () => {
    if (!gafeteRef.current) return;

    const originalBg = gafeteRef.current.style.backgroundColor;
    gafeteRef.current.style.backgroundColor = '#ffffff';

    const width = gafeteRef.current.offsetWidth;
    const height = gafeteRef.current.offsetHeight;

    const scale = 3;

    const canvas = await html2canvas(gafeteRef.current, {
      scale,
      width,
      height,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      imageTimeout: 0
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const link = document.createElement('a');
    link.href = imgData;
    link.download = `gafete_${empleadoSeleccionado?.numControl || 'empleado'}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    gafeteRef.current.style.backgroundColor = originalBg;
  };

  return (
    <div className="gafete-layout" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="formulario card shadow" style={{
        backgroundColor: '#fefefe',
        padding: '20px',
        borderRadius: '10px',
        fontSize: '16px',
        maxWidth: '340px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="/img/logo.png" alt="Logo" style={{ width: '80%', maxWidth: '180px' }} />
        </div>
        <h2 className="form-title" style={{ color: '#9A3324', textAlign: 'center', fontSize: '22px', marginBottom: '20px' }}>Generador de Gafetes</h2>

        <div className="form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ color: '#9A3324', fontWeight: 'bold' }}>Número de empleado:</label>
          <input
            type="text"
            value={personalInput}
            onChange={(e) => setPersonalInput(e.target.value)}
            placeholder="Ej: 2294"
            style={{ padding: '6px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', color: '#222' }}
          />

          {empleadoSeleccionado && (
            <>
              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>Nombre completo:</label>
              <input
                type="text"
                value={`${empleadoSeleccionado.nombre} ${empleadoSeleccionado.apellido1} ${empleadoSeleccionado.apellido2}`}
                readOnly
                style={{ padding: '6px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', color: '#222' }}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>Puesto:</label>
              <input
                type="text"
                value={empleadoSeleccionado.puesto}
                readOnly
                style={{ padding: '6px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', color: '#222' }}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>CURP:</label>
              <input
                type="text"
                value={empleadoSeleccionado.curp}
                readOnly
                style={{ padding: '6px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', color: '#222' }}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>IMSS:</label>
              <input
                type="text"
                value={empleadoSeleccionado.imss}
                readOnly
                style={{ padding: '6px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', color: '#222' }}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>📷 Foto del empleado:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ fontSize: '14px' }}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>🔍 Zoom:</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.01"
                value={imgScale}
                onChange={(e) => setImgScale(parseFloat(e.target.value))}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>↔ Posición horizontal:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={imgPosX}
                onChange={(e) => setImgPosX(parseInt(e.target.value))}
              />

              <label style={{ color: '#9A3324', fontWeight: 'bold' }}>↕ Posición vertical:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={imgPosY}
                onChange={(e) => setImgPosY(parseInt(e.target.value))}
              />

              <button onClick={handleDownloadJPEG} style={{
                marginTop: '25px',
                padding: '12px 24px',
                backgroundColor: '#9A3324',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Descargar como JPEG
              </button>
            </>
          )}
        </div>
      </div>

      <div className="gafete-panel zoom" ref={gafeteRef} style={{ backgroundColor: '#ffffff' }}>
        {empleadoSeleccionado ? (
          <div className="gafete-doble">
            <Gafete
              empleado={empleadoSeleccionado}
              scale={imgScale}
              posX={imgPosX}
              posY={imgPosY}
            />
          </div>
        ) : (
          <p style={{ color: 'gray' }}>Introduce un número de empleado válido.</p>
        )}
      </div>
    </div>
  );
};

export default GafeteGeneratorPage;