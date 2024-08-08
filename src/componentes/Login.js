import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa el CSS
import logo from '../imagenes/logo_taller.jpg'; // Ajusta la ruta según tu estructura de carpetas

function Login() {
  return (
    <div className="login-page">
      <header>
        <img src={logo} alt="Logo Taller Antonio Piedrahita" className="logo1" />
      </header>
      
      <section id="inicio-sesion">
        <h3>Iniciar Sesión</h3>
        <form>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" name="usuario" required />
          
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required />

          <div className="links">
            <Link to="/recuperar_contrasena">¿Olvidaste tu contraseña?</Link><br />
            <Link to="/recuperar_usuario">¿Olvidaste tu usuario?</Link><br />
          </div>
          
          <Link to="/Modulo-Admin">
            <button type="button">Ingresar</button>
          </Link>
        </form>
        <p><Link to="/">Volver al inicio</Link></p>
      </section>
      
      <footer>
        {/* Aquí va el pie de página */}
      </footer>
    </div>
  );
}

export default Login;
