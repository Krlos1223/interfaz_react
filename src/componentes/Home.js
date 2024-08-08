import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el CSS normal
import logo from '../imagenes/logo_taller.jpg';
import botonRegistro from '../imagenes/boton_registro.png';
import botonIngresar from '../imagenes/boton_ingresar.png';
import botonNosotros from '../imagenes/boton_nosotros.png';
import botonContacto from '../imagenes/boton_contacto.png';
import botonConfiguracion from '../imagenes/boton_configuracion.png';

function Home() {
  return (
    <div className="home">
      <header>
        <img src={logo} alt="Logo Taller Antonio Piedrahita" className="logo" />
        <h1 className="h1">SFI-TAP</h1>
      </header>
      <section className="navigation">
        <nav>
          <ul>
            <li><Link to="/registro"><span><img src={botonRegistro} alt="Registro" /> Registro</span></Link></li>
            <li><Link to="/login"><span><img src={botonIngresar} alt="Ingresar" /> Ingresar</span></Link></li>
            <li><a href="nosotros.html"><span><img src={botonNosotros} alt="Nosotros" /> Nosotros</span></a></li>
            <li><a href="contactanos.html"><span><img src={botonContacto} alt="Contáctanos" /> Contáctanos</span></a></li>
            <li><a href="configuracion.html"><span><img src={botonConfiguracion} alt="Configuración" /> Configuración</span></a></li>
          </ul>
        </nav>
      </section>
      <footer>
        {/* Aquí puedes agregar contenido del pie de página */}
      </footer>
    </div>
  );
}

export default Home;
