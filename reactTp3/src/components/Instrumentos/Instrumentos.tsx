import { useEffect, useState } from 'react';
import { getAll } from '../../service/InstrumentosServices';
import './Instrumentos.css';
import Instrumento from '../../entity/instrumento';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Instrumentos() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAll();
        if (response.data && Array.isArray(response.data.instrumentos)) {
          const productosData = response.data.instrumentos.map(
            (i: Instrumento) => ({
              id: i.id,
              instrumento: i.instrumento,
              marca: i.marca,
              modelo: i.modelo,
              imagen: i.imagen,
              precio: i.precio,
              costoEnvio: i.costoEnvio,
              cantidadVendida: i.cantidadVendida,
              descripcion: i.descripcion
            })
          );
          setInstrumentos(productosData);
        } else {
          console.log("La respuesta no contiene un array de productos:", response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="instrumentos" className='mt-5'>
      <ul className="lista-instrumentos">
        {instrumentos.map(instrumento => (
          <li key={instrumento.id}>
            <img src={instrumento.imagen} alt={instrumento.instrumento} />
            <div className="info">
              <h3>{instrumento.instrumento}</h3>
              <strong style={{ fontSize: "larger" }}>$ {instrumento.precio}</strong>
              {instrumento.costoEnvio === "G" ? (
                <div id="gratis">
                  <img src="img/camion.png" />
                  <p style={{ color: "#509920" }}>Envío gratis a todo el país</p>
                </div>
              ) : (
                <p style={{ color: "orange" }}>Costo de envío al interior de Argentina: ${instrumento.costoEnvio}</p>
              )}
              <p>{instrumento.cantidadVendida} vendidos</p>
              <Link to={`/instrumento/${instrumento.id}`}>
                <Button className='primary'>Ver detalles</Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
