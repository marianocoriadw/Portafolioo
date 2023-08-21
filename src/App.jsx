import React from "react";
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio";
import Datos from "./Componentes/Datos";
import Skills from "./Componentes/Skills";
import Proyectos from "./Componentes/Proyectos";
import { BrowserRouter, Route , Routes  } from "react-router-dom";


function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Inicio />
      <Datos />
      <Skills />
      <Proyectos />
    </BrowserRouter>
   
    </>
  )
}

export default App
