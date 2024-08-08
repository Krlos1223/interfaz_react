import React from 'react';
import './ModuloAdmin.css'; // Importa el archivo CSS para estilos específicos del módulo de administración
import logo from '../imagenes/logo_taller.jpg'; // Importa la imagen del logo
import gestionUsuarios from '../imagenes/imagen_gestion_usuarios.png'; // Importa la imagen para gestión de usuarios
import gestionClientes from '../imagenes/imagen_gestion_clientes.png'; // Importa la imagen para gestión de clientes
import gestionProductos from '../imagenes/imagen_gestion_productos.png'; // Importa la imagen para gestión de productos
import gestionServicios from '../imagenes/imagen_gestion_servicios.png'; // Importa la imagen para gestión de servicios
import gestionVentas from '../imagenes/imagen_gestion_ventas.png'; // Importa la imagen para gestión de ventas
import reportes from '../imagenes/imagen_reportes.png'; // Importa la imagen para reportes
import configuracion from '../imagenes/boton_configuracion.png'; // Importa la imagen para configuración

// Componente funcional de React para el módulo de administración
function ModuloAdmin() {
  return (
    <div className="admin-body">
      <header className="admin-header">
        <img src={logo} alt="Logo Taller Antonio Piedrahita" /> {/* Logo en el encabezado */}
        <h4>Administrador</h4> {/* Título del encabezado */}
      </header>
      <section id="panel-administrador">
        {/* Sección para opciones de administración */}
        <div className="opcion">
          <a href="gestion_usuarios.html">
            <img src={gestionUsuarios} alt="Gestión de Usuarios" /> {/* Imagen para gestión de usuarios */}
            <p>Gestión de Usuarios</p> {/* Texto para gestión de usuarios */}
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_clientes.html">
            <img src={gestionClientes} alt="Gestión de Clientes" /> {/* Imagen para gestión de clientes */}
            <p>Gestión de Clientes</p> {/* Texto para gestión de clientes */}
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_productos.html">
            <img src={gestionProductos} alt="Gestión de Productos" /> {/* Imagen para gestión de productos */}
            <p>Gestión de Productos</p> {/* Texto para gestión de productos */}
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_servicios.html">
            <img src={gestionServicios} alt="Gestión de Servicios" /> {/* Imagen para gestión de servicios */}
            <p>Gestión de Servicios</p> {/* Texto para gestión de servicios */}
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_ventas.html">
            <img src={gestionVentas} alt="Gestión de Ventas" /> {/* Imagen para gestión de ventas */}
            <p>Gestión de Ventas</p> {/* Texto para gestión de ventas */}
          </a>
        </div>
        <div id="enlaces-inferiores">
          {/* Sección para enlaces inferiores */}
          <div className="opcion">
            <a href="reportes.html">
              <img src={reportes} alt="Reportes" /> {/* Imagen para reportes */}
              <p>Reportes</p> {/* Texto para reportes */}
            </a>
          </div>
          <div className="opcion">
            <a href="configuracion_2.html">
              <img src={configuracion} alt="Configuración" /> {/* Imagen para configuración */}
              <p>Configuración</p> {/* Texto para configuración */}
            </a>
          </div>
        </div>
      </section>
      <footer>
        {/* Aquí va el pie de página */}
      </footer>
    </div>
  );
}

export default ModuloAdmin;
