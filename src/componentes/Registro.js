import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css'; // Importa el CSS normal

const Registro = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        cedula: '',
        fecha_nacimiento: '',
        rol: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registro Exitoso');
        window.location.href = '/registro-exitoso'; // Este archivo debe existir en tu proyecto
    };

    return (
        <div className="registro">
            <form onSubmit={handleSubmit}>
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
            <Link to="/">Volver al panel de Administrador</Link>
        </div>
    );
};

export default Registro;
