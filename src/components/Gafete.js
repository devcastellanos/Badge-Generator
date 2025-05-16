import React from 'react';

const Gafete = ({ empleado, scale = 1, posX = 50, posY = 50 }) => {
  const {
    nombre,
    apellido1,
    apellido2,
    puesto,
    numControl,
    imss,
    curp,
    foto = '/img/empleado.jpg'
  } = empleado;

  return (
    <>
      <style>{`
        table, td, div, p {
          font-family: "PT Sans", sans-serif;
          font-size: 8px;
          color: #ffffff;
        }
        h1 {
          font-family: "PT Sans", sans-serif;
          line-height: 1;
          font-size: 14px;
          color: #ffffff;
        }
        h2 {
          font-family: "PT Sans", sans-serif;
          line-height: 1;
          font-size: 12px;
          color: #ffffff;
        }
        .img-custom {
          position: relative;
          float: left;
          width: 114px;
          height: 114px;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        {/* GAFETE FRENTE */}
        <div style={{
          width: '205px',
          height: '55px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <table align="center" role="presentation" style={{
            width: '205px',
            height: '350px',
            borderRadius: '10px',
            border: '1px solid #000000',
            borderSpacing: 0,
            backgroundColor: '#031329f6',
            tableLayout: 'fixed'
          }}>
            <tbody>
              <tr><td align="center" style={{ height: '10px' }}>&nbsp;</td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '75px', border: '1px solid #000000', borderRadius: '15px', backgroundColor: '#ffffff' }}>
                    <tbody><tr><td align="center" style={{ height: '15px' }}></td></tr></tbody>
                  </table>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '20px' }}>&nbsp;</td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '120px' }}>
                    <tbody>
                      <tr>
                        <td align="center" style={{ height: '100px' }}>
                          <div
                            style={{
                              width: '114px',
                              height: '114px',
                              backgroundImage: `url(${foto})`,
                              backgroundSize: `${scale * 100}% auto`,
                              backgroundPosition: `${posX}% ${posY}%`,
                              backgroundRepeat: 'no-repeat',
                              border: '5px solid #9D0000',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              backgroundColor: '#ffffff'
                            }}
                          ></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '10px', background: '#9D0000' }}>&nbsp;</td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <h1>{nombre?.toUpperCase()}
                    <br /><span style={{ fontSize: '15px' }}>{`${apellido1?.toUpperCase()} ${apellido2?.toUpperCase()}`}</span>
                  </h1>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <p style={{ fontSize: '12px' }}>{puesto}</p>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ padding: 0, background: '#ffffff', borderRadius: '10px' }}>
                  <img src="/img/logo.png" width="75%" alt="Logo de la Empresa" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GAFETE REVERSO */}
        <div style={{
          width: '205px',
          height: '55px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <table align="center" role="presentation" style={{
            width: '205px',
            height: '355px',
            borderRadius: '10px',
            border: '1px solid #000000',
            borderSpacing: 0,
            backgroundColor: '#031329f6',
            tableLayout: 'fixed'
          }}>
            <tbody>
              <tr><td align="center" style={{ height: '10px' }}>&nbsp;</td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '75px', border: '1px solid #000000', borderRadius: '15px', backgroundColor: '#ffffff' }}>
                    <tbody><tr><td align="center" style={{ height: '15px' }}></td></tr></tbody>
                  </table>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '10px' }}>&nbsp;</td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '90%' }}>
                    <tbody>
                      <tr>
                        <td align="left" style={{ padding: 0 }}>
                          <p style={{ fontWeight: 700 }}>
                            No. Control: <span style={{ fontWeight: 400 }}>{numControl}</span><br />
                            I.M.S.S: <span style={{ fontWeight: 400 }}>{imss}</span><br />
                            CURP: <span style={{ fontWeight: 400 }}>{curp}</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '20px' }}></td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <div align="center">
                    <p>____________________________<br />Colaborador<br />&nbsp;</p>
                  </div>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '10px' }}></td></tr>
              <tr>
                <td align="center" style={{ padding: 0, background: '#9D0000' }}>
                  <p style={{ color: '#ffffff' }}>
                    "Somos una empresa consolidada <br />prospera que ha logrado la trascendencia."
                  </p>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '10px' }}></td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <td align="center" style={{ width: '35%' }}>
                          <img src="/img/Logo-Parcial.png" width="100%" alt="Logo parcial" />
                        </td>
                        <td align="center" style={{ width: '20%' }}>
                          <table align="center" role="presentation" style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td align="center" style={{ padding: 0 }}>
                                  <img src="/img/ico-telefono.png" width="100%" alt="Icono Teléfono" />
                                </td>
                              </tr>
                              <br></br>
                              <tr>
                                <td align="center" style={{ padding: 0 }}>
                                  <img src="/img/ico-global.png" width="100%" alt="Icono Web" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td align="center" style={{ width: '45%' }}>
                          <table align="center" role="presentation" style={{ width: '100%' }}>
                            <tbody>
                              <tr>
                                <td align="left" style={{ padding: 0 }}>
                                  <p>Tel. (33) 3001 4500 Ext. 1059<br />Cel. 33 1417 9174</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style={{ padding: 0 }}>
                                  <p>www.grupotarahumara.com.mx<br />App Grupo Tarahumara</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr><td align="center" style={{ height: '10px' }}></td></tr>
              <tr>
                <td align="center" style={{ padding: 0 }}>
                  <table align="center" role="presentation" style={{ width: '99%' }}>
                    <tbody>
                      <tr>
                        <td align="left" style={{ width: '75%' }}>
                          <p style={{ fontSize: '5px', fontWeight: 700, paddingLeft: '5px' }}>
                            Esta identificacion solo sirve para fines de identificacion <br />
                            y de control de acceso, el acreditado debera entregar a <br />
                            la empresa al termino de la relacion laboral.
                          </p>
                        </td>
                        <td align="center" style={{ width: '25%', backgroundColor: '#ffffff', borderRadius: '8px' }}>
                          <img src="/img/logo.png" width="100%" alt="Logo de la Empresa" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Gafete;
