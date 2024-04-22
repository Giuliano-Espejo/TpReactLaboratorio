import { useEffect, useState } from "react";
import { getById } from "../../service/InstrumentosServices";
import { useParams } from 'react-router-dom';
import Instrumento from "../../entity/instrumento";
import "./Instrumento.css"
import { Button } from "react-bootstrap";

export const InstrumentoItem = () => {
  let { id } = useParams();

  const [instrumento, setInstrumento] = useState<Instrumento>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getById(id);
        if (response.data) {
          console.log("response", response.data.instrumento)
          setInstrumento(response.data.instrumento);
        } else {
          console.log("La respuesta no contiene un instrumento:", response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [id]);


  return (
    <div>
      {instrumento ? (
        <div id="main2">
          <div id="izq">
            <div id="instrumento">
              <img src={`../${instrumento.imagen}`} />
            </div>
            <h2> <strong>Descripción: </strong></h2>
            <p>{instrumento.descripcion}</p>
          </div>
          <div id="der">
            <p>{instrumento.cantidadVendida} vendidos</p>
            <h3><strong>{instrumento.instrumento}</strong></h3>
            <h2>$ {instrumento.precio}</h2>
            <h5>Marca: {instrumento.marca}</h5>
            <h5>Modelo: {instrumento.modelo}</h5>
            <h4>Costo Envio: </h4>
            {instrumento.costoEnvio === "G" ? (
              <div id="gratis">
                <img src="../img/camion.png" />
                <p style={{ color: "#509920" }}>Envío gratis a todo el país</p>
              </div>
            ) : (
              <p style={{ color: "orange" }}>Costo de envío al interior de Argentina: ${instrumento.costoEnvio}</p>
            )}
            <Button id="boton"> Agregar al Carrito</Button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
