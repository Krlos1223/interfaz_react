import React from 'react';
import './ModuloAdmin.css';
import logo from '../imagenes/logo_taller.jpg';
import gestionUsuarios from '../imagenes/imagen_gestion_usuarios.png';
import gestionClientes from '../imagenes/imagen_gestion_clientes.png';
import gestionProductos from '../imagenes/imagen_gestion_productos.png';
import gestionServicios from '../imagenes/imagen_gestion_servicios.png';
import gestionVentas from '../imagenes/imagen_gestion_ventas.png';
import reportes from '../imagenes/imagen_reportes.png';
import configuracion from '../imagenes/boton_configuracion.png';

function ModuloAdmin() {
  return (
    <div className="admin-body">
      <header className="admin-header">
        <img src={logo} alt="Logo Taller Antonio Piedrahita" />
        <h4>Administrador</h4>
      </header>
      <section id="panel-administrador">
        <div className="opcion">
          <a href="gestion_usuarios.html">
            <img src={gestionUsuarios} alt="Gestión de Usuarios" />
            <p>Gestión de Usuarios</p>
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_clientes.html">
            <img src={gestionClientes} alt="Gestión de Clientes" />
            <p>Gestión de Clientes</p>
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_productos.html">
            <img src={gestionProductos} alt="Gestión de Productos" />
            <p>Gestión de Productos</p>
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_servicios.html">
            <img src={gestionServicios} alt="Gestión de Servicios" />
            <p>Gestión de Servicios</p>
          </a>
        </div>
        <div className="opcion">
          <a href="gestion_ventas.html">
            <img src={gestionVentas} alt="Gestión de Ventas" />
            <p>Gestión de Ventas</p>
          </a>
        </div>
        <div id="enlaces-inferiores">
          <div className="opcion">
            <a href="reportes.html">
              <img src={reportes} alt="Reportes" />
              <p>Reportes</p>
            </a>
          </div>
          <div className="opcion">
            <a href="configuracion_2.html">
              <img src={configuracion} alt="Configuración" />
              <p>Configuración</p>
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
