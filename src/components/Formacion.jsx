import React from "react";
import "./Formacion.css";

const Formacion = () => {
  const academica = [
    {
      titulo: "Técnico Superior en Administración de Sistemas Informáticos y Redes",
      sitio: "C.E.S. Lope de Vega",
      fecha: "Septiembre 2020 - Junio 2022"
    },
    {
      titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
      sitio: "I.E.S. Gran Capitán",
      fecha: "Septiembre 2022 - Actualidad"
    }
  ];

  const profesional = [
    {
      titulo: "Administrador de sistemas",
      sitio: "Centro Magisterio Sagrado Corazón (UCO)",
      fecha: "Marzo 2022 - Junio 2022"
    },
    {
      titulo: "Desarrollador y despliegue web",
      sitio: "Fersoft Informática",
      fecha: "Marzo 2025 - Actualidad"
    }
  ];

  const otros = [
    {
      titulo: "ISE I - Trinity",
      sitio: "Libre",
    },
    {
      titulo: "Desarrollador CTF Sysmana XIV",
      sitio: "I.E.S. Gran Capitán",
    },
    {
      titulo: "Carnet conducir tipo B",
      sitio: "Autoescuelas Góngora",
    }
  ];

  const renderItems = (items, mostrarFecha = true) =>
    items.map((item, index) => (
      <div key={index} className="formacion-item">
        <h4>{item.titulo}</h4>
        <p><strong>Sitio:</strong> {item.sitio}</p>
        {mostrarFecha && (
          <p className="details"><strong>Fecha:</strong> {item.fecha}</p>
        )}
      </div>
    ));

  return (
    <section className="formacion" id="formacion">
      <h2>Formación</h2>
      <div className="formacion-columns">
        <div className="formacion-column">
          <h3>Académica</h3>
          <div className="formacion-list">
            {renderItems(academica)}
          </div>
        </div>
        <div className="formacion-column">
          <h3>Profesional</h3>
          <div className="formacion-list">
            {renderItems(profesional)}
          </div>
        </div>
        <div className="formacion-column">
          <h3>Otros</h3>
          <div className="formacion-list">
            {renderItems(otros, false)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
