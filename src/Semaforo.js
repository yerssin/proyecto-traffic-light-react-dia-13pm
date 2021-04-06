import React from "react";
import './Semaforo.css';
import { useState } from "react";

function Semaforo() {

  const [colorSeleccionadoRojo, setColorSeleccionadoRojo] = useState('');
  const [colorSeleccionadoAmarillo, setColorSeleccionadoAmarillo] = useState('');
  const [colorSeleccionadoVerde, setColorSeleccionadoVerde] = useState('');

  function setColorSeleccionado(e) {
    if (e.target.classList.contains("rojo")) {
      setColorSeleccionadoRojo("selected");
      setColorSeleccionadoAmarillo("");
      setColorSeleccionadoVerde("");
    }

    if (e.target.classList.contains("amarillo")) {
      setColorSeleccionadoRojo("");
      setColorSeleccionadoAmarillo("selected");
      setColorSeleccionadoVerde("");
    }

    if (e.target.classList.contains("verde")) {
      setColorSeleccionadoRojo("");
      setColorSeleccionadoAmarillo("");
      setColorSeleccionadoVerde("selected");
    }
  }
  return (
    <div id="padre">
      <div id="palo"></div>
      <div className="caja">
        <div className={"rojo luz " + colorSeleccionadoRojo} onClick={setColorSeleccionado}></div>
        <div className={"amarillo luz " + colorSeleccionadoAmarillo} onClick={setColorSeleccionado}></div>
        <div className={"verde luz " + colorSeleccionadoVerde} onClick={setColorSeleccionado}></div>
      </div>
    </div>

  );
}

export default Semaforo