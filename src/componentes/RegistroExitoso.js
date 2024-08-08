import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroExitoso.css'; // Importa el CSS normal

const RegistroExitoso = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirige después de 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [navigate]);

  return (
    <div className="registroExitoso">
      <h2>Registro Exitoso</h2>
      <div className="mensajeRegistroExitoso">¡Tu registro ha sido exitoso!</div>
    </div>
  );
};

export default RegistroExitoso;
