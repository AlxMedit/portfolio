import React, { Suspense, lazy } from "react";
import './App.css'; 

const NavBar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./components/Hero"));

const Proyectos = lazy(() => import("./components/Proyectos"));
const StackTecnologico = lazy(() => import("./components/StackTecnologico"));
const SobreMi = lazy(() => import("./components/SobreMi"));
const Contacto = lazy(() => import("./components/Contacto"));
const Formacion = lazy(() => import("./components/Formacion"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="suspense-container">
          <div className="spinner"></div>
          <div className="suspense-text">Cargando...</div>
        </div>
      }
    >
      <NavBar />
      <Hero />
      <Proyectos />
      <Formacion /> 
      <StackTecnologico />
      <SobreMi />
      <Contacto />
    </Suspense>
  );
}

export default App;
