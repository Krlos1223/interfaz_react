import React from 'react'; // Importamos React para usarlo en nuestra aplicación
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos herramientas para manejar las rutas de la aplicación
import Home from './componentes/Home'; // Importamos el componente de la página principal
import Registro from './componentes/Registro'; // Importamos el componente para la página de registro
import RegistroExitoso from './componentes/RegistroExitoso'; // Importamos el componente para la página de registro exitoso
import Login from './componentes/Login'; // Importamos el componente para la página de inicio de sesión
import ModuloAdmin from './componentes/ModuloAdmin'; // Importamos el componente para el módulo de administración

const App = () => {
  return (
    <Router> {/* Encapsulamos la aplicación dentro del Router para habilitar la navegación */}
      <Routes> {/* Definimos las rutas de la aplicación */}
        <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
        <Route path="/registro" element={<Registro />} /> {/* Ruta para la página de registro */}
        <Route path="/registro-exitoso" element={<RegistroExitoso />} /> {/* Ruta para la página de registro exitoso */}
        <Route path="/login" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
        <Route path="/modulo-admin" element={<ModuloAdmin />} /> {/* Ruta para el módulo de administración */}
      </Routes>
    </Router>
  );
};

export default App; // Exportamos la aplicación para que pueda ser utilizada en otros archivos
