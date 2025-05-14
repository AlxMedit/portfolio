import React, { useState } from 'react';
import {
  FaReact, FaNodeJs, FaPhp, FaLaravel, FaPython, FaDocker, FaGitAlt,
  FaWordpress, FaJs
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJquery, SiAstro, SiSymfony, SiMysql, SiApollographql
} from 'react-icons/si';
import './global.css';

export default function StackTecnologico() {
  const [expanded, setExpanded] = useState(null);
  const [category, setCategory] = useState('Backend'); // Por defecto Backend
  const [activeStack, setActiveStack] = useState(null);

const stacks = [
  { 
    name: 'React', 
    description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.', 
    icon: <FaReact />, 
    category: 'Frontend', 
    color: '#61DAFB' 
  },
  { 
    name: 'TailwindCSS', 
    description: 'Framework CSS basado en utilidades para crear diseños personalizados rápidamente.', 
    icon: <SiTailwindcss />, 
    category: 'Frontend', 
    color: '#38BDF8' 
  },
  { 
    name: 'Node.js', 
    description: 'Entorno de ejecución de JavaScript del lado del servidor para aplicaciones escalables.', 
    icon: <FaNodeJs />, 
    category: 'Backend', 
    color: '#8CC84B' 
  },
  { 
    name: 'PHP', 
    description: 'Lenguaje de programación usado para desarrollar aplicaciones web dinámicas.', 
    icon: <FaPhp />, 
    category: 'Backend', 
    color: '#8993BE' 
  },
  { 
    name: 'Laravel', 
    description: 'Framework PHP que facilita el desarrollo de aplicaciones web robustas y seguras.', 
    icon: <FaLaravel />, 
    category: 'Backend', 
    color: '#FF2D20' 
  },
  { 
    name: 'Python', 
    description: 'Lenguaje de programación versátil, utilizado en desarrollo web, IA y análisis de datos.', 
    icon: <FaPython />, 
    category: 'Backend', 
    color: '#FFDF00' 
  },
  { 
    name: 'Symfony', 
    description: 'Framework PHP para crear aplicaciones web escalables y reutilizables.', 
    icon: <SiSymfony />, 
    category: 'Backend', 
    color: '#000000' 
  },
  { 
    name: 'Docker', 
    description: 'Plataforma para crear, desplegar y ejecutar aplicaciones en contenedores.', 
    icon: <FaDocker />, 
    category: 'Otros', 
    color: '#2496ED' 
  },
  { 
    name: 'Git', 
    description: 'Sistema de control de versiones distribuido para el seguimiento de cambios en el código.', 
    icon: <FaGitAlt />, 
    category: 'Otros', 
    color: '#F05032' 
  },
  { 
    name: 'WordPress', 
    description: 'CMS utilizado para crear y gestionar sitios web, especialmente blogs y tiendas online.', 
    icon: <FaWordpress />, 
    category: 'Otros', 
    color: '#21759B' 
  },
  { 
    name: 'JavaScript', 
    description: 'Lenguaje de programación para crear contenido interactivo en la web.', 
    icon: <FaJs />, 
    category: 'Frontend', 
    color: '#F7DF1E' 
  },
  { 
    name: 'MySQL', 
    description: 'Sistema de gestión de bases de datos relacional popular y de código abierto.', 
    icon: <SiMysql />, 
    category: 'Otros', 
    color: '#00618A' 
  },
  { 
    name: 'jQuery', 
    description: 'Biblioteca de JavaScript para simplificar la manipulación del DOM y eventos.', 
    icon: <SiJquery />, 
    category: 'Frontend', 
    color: '#0868AC' 
  },
  { 
    name: 'Astro', 
    description: 'Framework para construir sitios rápidos utilizando múltiples frameworks como React y Vue.', 
    icon: <SiAstro />, 
    category: 'Frontend', 
    color: '#FF5E8A' 
  },
  { 
    name: 'API Rest', 
    description: 'Arquitectura para intercambiar datos entre aplicaciones a través de HTTP.', 
    icon: <SiApollographql />, 
    category: 'Otros', 
    color: '#E535AB' 
  }
];

  const handleClick = (stackName) => {
    setExpanded(expanded === stackName ? null : stackName);
    setActiveStack(expanded === stackName ? null : stackName);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setExpanded(null);
    setActiveStack(null);
  };

  const filteredStacks = stacks.filter(stack => stack.category === category);

  return (
    <section className="stack-tecnologico" id="stack">
      <h2>Stack Tecnológico</h2>

      <div className="category-buttons">
        <button
          onClick={() => handleCategoryChange('Frontend')}
          className={category === 'Frontend' ? 'active' : ''}
        >
          Frontend
        </button>
        <button
          onClick={() => handleCategoryChange('Backend')}
          className={category === 'Backend' ? 'active' : ''}
        >
          Backend
        </button>
        <button
          onClick={() => handleCategoryChange('Otros')}
          className={category === 'Otros' ? 'active' : ''}
        >
          Otros y herramientas
        </button>
      </div>

      <div className="stack-container">
        {filteredStacks.map((stack) => (
          <div
            key={stack.name}
            className={`stack-card ${expanded === stack.name ? 'expanded' : ''}`}
            onClick={() => handleClick(stack.name)}
            style={{
              backgroundColor: expanded === stack.name ? stack.color : '#1e1e1e',
              borderColor: expanded === stack.name ? stack.color : 'transparent'
            }}
          >
            <div className="stack-icon">{stack.icon}</div>
            <div className="stack-name">{stack.name}</div>
            {expanded === stack.name && (
              <div className="stack-description">
                <p>{stack.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
