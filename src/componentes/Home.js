import React from 'react'; // Importa React para usar componentes
import { Link } from 'react-router-dom'; // Importa el componente Link para navegación en la aplicación
import './Home.css'; // Importa los estilos específicos para este componente
import logo from '../imagenes/logo_taller.jpg'; // Importa la imagen del logo
import botonRegistro from '../imagenes/boton_registro.png'; // Importa la imagen del botón de registro
import botonIngresar from '../imagenes/boton_ingresar.png'; // Importa la imagen del botón de ingresar
import botonNosotros from '../imagenes/boton_nosotros.png'; // Importa la imagen del botón de nosotros
import botonContacto from '../imagenes/boton_contacto.png'; // Importa la imagen del botón de contacto
import botonConfiguracion from '../imagenes/boton_configuracion.png'; // Importa la imagen del botón de configuración

function Home() {
  return (
    <div className="home"> {/* Contenedor principal con la clase "home" */}
      <header> {/* Sección del encabezado */}
        <img src={logo} alt="Logo Taller Antonio Piedrahita" className="logo" /> {/* Imagen del logo */}
        <h1 className="h1">SFI-TAP</h1> {/* Título principal */}
      </header>
      <section className="navigation"> {/* Sección de navegación con la clase "navigation" */}
        <nav> {/* Elemento de navegación */}
          <ul> {/* Lista de enlaces de navegación */}
            <li><Link to="/registro"><span><img src={botonRegistro} alt="Registro" /> Registro</span></Link></li> {/* Enlace a la página de registro */}
            <li><Link to="/login"><span><img src={botonIngresar} alt="Ingresar" /> Ingresar</span></Link></li> {/* Enlace a la página de ingreso */}
            <li><a href="nosotros.html"><span><img src={botonNosotros} alt="Nosotros" /> Nosotros</span></a></li> {/* Enlace a la página de nosotros */}
            <li><a href="contactanos.html"><span><img src={botonContacto} alt="Contáctanos" /> Contáctanos</span></a></li> {/* Enlace a la página de contacto */}
            <li><a href="configuracion.html"><span><img src={botonConfiguracion} alt="Configuración" /> Configuración</span></a></li> {/* Enlace a la página de configuración */}
          </ul>
        </nav>
      </section>
      <footer> {/* Sección del pie de página */}
        {/* Aquí puedes agregar contenido del pie de página */}
      </footer>
    </div>
  );
}

export default Home; // Exporta el componente Home para usarlo en otras partes de la aplicación
