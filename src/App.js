import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Registro from './componentes/Registro';
import RegistroExitoso from './componentes/RegistroExitoso';
import Login from './componentes/Login';
import ModuloAdmin from './componentes/ModuloAdmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro-exitoso" element={<RegistroExitoso />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modulo-admin" element={<ModuloAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
