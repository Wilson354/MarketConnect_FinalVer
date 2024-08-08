import React from "react";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/product/details');
  };

  return (
    <div className="card-section">
      <div className="card">
        <h3>¿Por qué te interesa?</h3>
        <p>Explora los productos que creemos que te encantarán.</p>
      </div>
      <div className="card">
        <h3>Ingresa a tu cuenta</h3>
        <p>Accede a tu cuenta para ver tus compras y recomendaciones personalizadas.</p>
        <button>Ingresar</button>
      </div>
      <div className="card">
        <h3>Ingresa tu ubicación</h3>
        <p>Proporciona tu ubicación para ver productos disponibles en tu área.</p>
        <button>Ingresar ubicación</button>
      </div>
      <div className="card">
        <h3>Todo el catálogo</h3>
        <p>Revisa todos los productos disponibles en nuestro catálogo.</p>
        <button onClick={handleRedirect}>Ver catálogo</button>
      </div>
    </div>
  );
};

export default CardSection;
