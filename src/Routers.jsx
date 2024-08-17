import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Ansiedade from './pages/ansiedade/Ansiedade'
import Autismo from './pages/autismo/Autismo'
import Depressao from './pages/depressao/Depressao'
import FobiaSocial from './pages/fobia_social/FobiaSocial'
import TDA from './pages/tda/TDA'
import TranstornoAlimentar from './pages/transtorno_alimentar/TranstornoAlimentar'
import TranstornoPersonalidade from "./pages/transtorno_personalidade/TranstornoPersonalidade";
import index from './pages/index/index';
import TranstornoPanico from "./pages/transtorno_panico/TranstornoPanico";
import LoginJogo from './pages/autismo/Autismo/Login'
import MemoryGame from "./pages/autismo/Autismo/MemoryGame";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={index}  exact />
        <Route path="/ansiedade" Component={Ansiedade} />
        <Route path="/autismo" Component={Autismo} />
        <Route path="/autismo/loginJogo" Component={LoginJogo} />
        <Route path="/autismo/Memory" Component={MemoryGame} />
        <Route path="/depressao" Component={Depressao} />
        <Route path="/fobia_social" Component={FobiaSocial} />
        <Route path="/tda" Component={TDA} />
        <Route path="/transtorno_alimentar" Component={TranstornoAlimentar} />
        <Route path="/transtorno_personalidade" Component={TranstornoPersonalidade} />
        <Route path="/transtorno_panico" Component={TranstornoPanico} />


      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
