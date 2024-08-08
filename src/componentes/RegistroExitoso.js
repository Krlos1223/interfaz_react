import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroExitoso.css'; // Importa los estilos para esta página

const RegistroExitoso = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Configura un temporizador para redirigir al usuario después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Limpia el temporizador si el componente se desmonta antes de que pase el tiempo
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="registroExitoso">
      <h2>Registro Exitoso</h2>
      <div className="mensajeRegistroExitoso">¡Tu registro ha sido exitoso!</div>
    </div>
  );
};

export default RegistroExitoso;
