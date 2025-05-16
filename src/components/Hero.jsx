import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import SocialButton from "./SocialButton";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import './Hero.css';

export default function Hero() {
  // Inicializamos tsParticles con el bundle completo v2.x
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Partículas en fullScreen */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "#121212" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: { enable: true, minimumValue: 0.3 } },
            size: { value: { min: 1, max: 2 }, random: true },
            links: {
              enable: true,
              distance: 75,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Contenido del Hero */}
      <div className="hero-content" id="inicio">
        
        <div className="foto-con-luz">
          <img src="https://res.cloudinary.com/dosy11yxg/image/upload/v1747221624/alex_ines0q.jpg" alt="Foto de Perfil" className="hero-img" />
        </div>
        <div className="hero-texto">
          <h1>Alejandro Abad</h1>
          <div className="hero-botones">
            <SocialButton
              color="#0A66C2"
              hoverColor="#004182"
              Icon={FaLinkedin}
              text="LinkedIn"
              url="https://www.linkedin.com/in/alejandro-vaq-abad/"
            />
            <SocialButton
              color="#181717"
              hoverColor="#0D0D0D"
              Icon={FaGithub}
              text="GitHub"
              url="https://github.com/AlxMedit"
            />
            <SocialButton
              color="#9917bd"
              hoverColor="#790f96"
              Icon={FaDownload}
              text="Descargar CV"
              url="https://cdn.jsdelivr.net/gh/AlxMedit/portfolio@master/public/cv.pdf"
            />
          </div>
        </div>
      </div>
      <div className="scroll-down-indicator">
        <a href="#proyectos">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-arrow"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

    </>
  );
}
