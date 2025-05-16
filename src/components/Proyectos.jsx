import React from 'react';
import Card from './Card';
import './global.css';

export default function Proyectos() {
  const proyectos = [
    {
      title: 'Generador de Contraseñas',
      description: 'Aplicación desarrollada en React que permite generar contraseñas completamente aleatorias, sin depender de patrones predefinidos. Ideal para pruebas de seguridad o creación de accesos únicos.',
      stacks: ['React'],
      demoLink: 'https://randompasswordgenerator-o94b2uo7c-alxmedits-projects.vercel.app/',
      image: 'https://res.cloudinary.com/dosy11yxg/image/upload/v1747221717/generador_ynorck.png', 
      repoLink: 'https://github.com/AlxMedit/passwordGenerator',
    },
    {
      title: 'Gestión C. Cívicos FRONT',
      description: 'Proyecto en React que consume una API REST desarrollada en PHP nativo para la gestión de reservas de actividades e instalaciones en centros cívicos. Permite consultar, reservar y administrar horarios de forma dinámica.',
      stacks: ['React'],
      demoLink: 'https://youtu.be/U_Uaczgkkh0',
      image: 'https://res.cloudinary.com/dosy11yxg/image/upload/v1747221718/frontcc_pf2qua.png',
      repoLink: 'https://github.com/AlxMedit/Cliente-API-React',
    },
    {
      title: 'Gestión C. Cívicos BACK',
      description: 'API desarrollada en PHP nativo, utilizando la librería phpdotenv para el manejo seguro de variables sensibles. Incluye integración con Firebase para la autenticación de usuarios, asegurando que solo quienes hayan iniciado sesión puedan realizar reservas.',
      stacks: ['PHP'],
      demoLink: 'https://youtu.be/U_Uaczgkkh0',
      image: 'https://res.cloudinary.com/dosy11yxg/image/upload/v1747221718/backcc_zmnwe3.png',
      repoLink: 'https://github.com/AlxMedit/Desarrollo-API-PHP',
    },
    {
        title: 'Gestión de Portfolios',
        description: 'Aplicación web construida bajo el patrón Modelo-Vista-Controlador con PHP, orientada a la gestión de portfolios personales. Permite crear, editar y visualizar portfolios de otros usuarios. Incorpora Firebase para la autenticación y Mailer para el envío automático de correos de verificación durante el registro.',
        stacks: ['PHP'],
        demoLink: 'https://youtu.be/qDJ74iVyICs',
        image: 'https://res.cloudinary.com/dosy11yxg/image/upload/v1747221719/portfolios_vcaily.png',
        repoLink: 'https://github.com/AlxMedit/PHP/tree/main/Aplicaci%C3%B3n%20de%20gesti%C3%B3n%20de%20portfolios'    
    },
    {
        title: 'Proyecto Integrado',
        description: 'Aplicación desarrollada como proyecto final del CFGS en Desarrollo de Aplicaciones Web. Se encarga del consumo en tiempo real de la API de ADSB.LOL, ofreciendo visualización y análisis de datos aéreos por continente y específicamente en España. Incluye un mapa interactivo que muestra la posición actual de aviones en vivo, manteniendo un flujo constante de información.',
        stacks: ['React', 'Tailwind', 'Astro'],
        demoLink: 'https://api-vuelos-eight.vercel.app/',
        image: 'https://res.cloudinary.com/dosy11yxg/image/upload/v1747221651/aviones_vcsji1.png',
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