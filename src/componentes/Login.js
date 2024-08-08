import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa el archivo de estilos CSS
import logo from '../imagenes/logo_taller.jpg'; // Ruta a la imagen del logo

function Login() {
  return (
    <div className="login-page">
      <header>
        <img src={logo} alt="Logo Taller Antonio Piedrahita" className="logo1" />
      </header>
      
      <section id="inicio-sesion">
        <h3>Iniciar Sesión</h3> {/* Título de la sección de inicio de sesión */}
        <form>
          {/* Campo para el nombre de usuario */}
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" name="usuario" required />
          
          {/* Campo para la contraseña */}
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required />

          <div className="links">
            {/* Enlaces para recuperar la contraseña o el usuario */}
            <Link to="/recuperar_contrasena">¿Olvidaste tu contraseña?</Link><br />
            <Link to="/recuperar_usuario">¿Olvidaste tu usuario?</Link><br />
          </div>
          
          {/* Botón para iniciar sesión, que redirige al módulo de administración */}
          <Link to="/Modulo-Admin">
            <button type="button">Ingresar</button>
          </Link>
        </form>
        
        {/* Enlace para volver al inicio */}
        <p><Link to="/">Volver al inicio</Link></p>
      </section>
      
      <footer>
        {/* Aquí puedes agregar contenido del pie de página */}
      </footer>
    </div>
  );
}

export default Login;
