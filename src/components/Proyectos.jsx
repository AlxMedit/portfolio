import React from 'react';
import Card from './Card';
import './Proyectos.css'

export default function Proyectos() {
  const proyectos = [
    {
      title: 'Generador de Contraseñas',
      description: 'Proyecto desarrollado en React con la finalidad de poder generar contraseñas completamente aleatorias sin cumplimiento de patrón',
      stacks: ['React'],
      demoLink: 'https://randompasswordgenerator-o94b2uo7c-alxmedits-projects.vercel.app/',
      image: '/imagenes/generador.png', 
      repoLink: 'https://github.com/AlxMedit/passwordGenerator',
    },
    {
      title: 'Gestión C. Cívicos FRONT',
      description: 'Proyecto desarrollado en React, se encarga del consumo de una API realizada en PHP nativo, para la gestión de reservas de actividades e instalaciones de centros cívicos',
      stacks: ['React'],
      demoLink: 'https://youtu.be/U_Uaczgkkh0',
      image: '/imagenes/frontcc.png',
      repoLink: 'https://github.com/AlxMedit/Cliente-API-React',
    },
    {
      title: 'Gestión C. Cívicos BACK',
      description: 'API desarrollada en PHP nativo con uso de la librería phpdotenv para mejorar la seguridad de los datos y firebase para la gestión de usuarios, para poder tener control de que solo usuarios con sesión iniciada puedan realizar las reservas',
      stacks: ['PHP'],
      demoLink: 'https://youtu.be/U_Uaczgkkh0',
      image: '/imagenes/backcc.png',
      repoLink: 'https://github.com/AlxMedit/Desarrollo-API-PHP',
    },
    {
        title: 'Gestión de Portfolios',
        description: 'Aplicación desarrollada en modelo vista-controlador con PHP para la gestión de un portal de portfolios, pudiendo crear el tuyo, modificarlo o ver el del resto, cuenta con librerias como firebase y mailer, para poder enviar correos de verificación de usuario a la hora de registrarse',
        stacks: ['PHP'],
        demoLink: 'https://youtu.be/qDJ74iVyICs',
        image: '/imagenes/portfolios.png',
        repoLink: 'https://github.com/AlxMedit/PHP/tree/main/Aplicaci%C3%B3n%20de%20gesti%C3%B3n%20de%20portfolios'    
    },
    {
        title: 'Proyecto Integrado',
        description: 'Proyecto integrado del CFGS DAW, el proyecto consiste en el consumo de la api de ADSB.LOL y tratado de datos, pudiendo acceder a datos de cada continente y España, tratando los datos en vivo y manteniendo un flujo continuo de los datos, también cuenta con un mapa para el muestreo de los aviones en vivo.',
        stacks: ['React', 'Tailwind', 'Astro'],
        demoLink: 'https://api-vuelos-eight.vercel.app/',
        image: '/imagenes/aviones.png',
        repoLink: '#'    
    }
  ];

  return (
    <section className="proyectos" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            title={proyecto.title}
            description={proyecto.description}
            stacks={proyecto.stacks}
            demoLink={proyecto.demoLink}
            image={proyecto.image}
            repoLink={proyecto.repoLink}
          />
        ))}
      </div>
    </section>
  );
}
