import React, { useState } from "react";
import './global.css';

export default function SobreMi() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes para el slider
  const images = [
    "https://res.cloudinary.com/dosy11yxg/image/upload/v1751107744/loquehago2_h5qmh9_r6nkyy.jpg", // Ruta de la imagen 1
    "https://res.cloudinary.com/dosy11yxg/image/upload/v1751107711/loquehago1_xtzppl_nkczmt.jpg", // Ruta de la imagen 2
    "https://res.cloudinary.com/dosy11yxg/image/upload/v1751107671/loquehago3_ju7gt0_c_fill_w_720_h_720_sszf1j.jpg", // Ruta de la imagen 3
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="sobre-mi" id="about">
      <div className="sobre-mi-contenido">
        <h2>Sobre mí</h2>
        <div className="sobre-mi-grid">
          {/* Primer columna para el texto */}
          <div className="sobre-mi-texto">
            <p>
              ¡Hola! Soy Alex, un apasionado de la informática y la programación. 
              Desde pequeño, influenciado por mi familia, siempre he tenido una conexión 
              con el sector, lo que me llevó a estudiar y graduarme en ASIR y DAW.
            </p>
            <p>
              Actualmente, soy desarrollador web junior y administrador de sistemas, 
              con un enfoque e interés especial en el análisis de datos, la seguridad informática y 
              el aseguramiento de la calidad (QA testing). Estoy comprometido con la mejora 
              continua y siempre estoy buscando nuevas herramientas y tecnologías para seguir 
              creciendo.
            </p>
            <p>
              La programación es más que un trabajo para mí, es una pasión. ¡Siempre listo 
              para aprender y enfrentar nuevos retos!
            </p>
            <h3>Mis Hobbies</h3>
            <p>
              Además de la programación, disfruto de los juegos de mesa y tengo una gran 
              afición por Pokémon. Por ello decidí unir dos cosas que me gustan mucho y me
              definen y referenciarlos en mi portfolio, por ello para la estructura de los
              proyectos decidí simular cada proyecto como si fuera una carta de Pokemon TCG
            </p>
          </div>

          {/* Cuarta columna para el slider de imágenes */}
          <div className="sobre-mi-slider">
            <button className="slider-btn prev" onClick={prevImage}>{"❮"}</button>
            <img src={images[currentImageIndex]} alt="Fotos" />
            <button className="slider-btn next" onClick={nextImage}>{"❯"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
