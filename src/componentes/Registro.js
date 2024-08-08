import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css'; // Trae los estilos de CSS para este componente

// Componente de Registro
const Registro = () => {
    // Usa un estado para guardar los datos del formulario
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        cedula: '',
        fecha_nacimiento: '',
        rol: '',
        username: '',
        password: ''
    });

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        alert('Registro Exitoso'); // Muestra un mensaje de éxito
        window.location.href = '/registro-exitoso'; // Redirige a otra página (asegúrate de que esta página exista en tu proyecto)
    };

    return (
        <div className="registro">
            <form onSubmit={handleSubmit}>
                {/* Campos del formulario */}
                <label htmlFor="nombres">Nombres:</label>
                <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="cedula">Cédula:</label>
                <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="rol">Rol:</label>
                <select
                    id="rol"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    required
                >
                    <option value="administrador">Administrador</option>
                    <option value="mecanico">Mecánico</option>
                    <option value="vendedor">Vendedor</option>
                </select>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
            <Link to="/">Volver al panel de Administrador</Link> {/* Enlace para volver al panel de administración */}
        </div>
    );
};

export default Registro;
