import React from "react";
import image1 from "../../assets/images/catalogo/plumonesdoble.png"; // Importar la imagen 1
import image2 from "../../assets/images/catalogo/mercado.png"; // Importar la imagen 2

const LegendCardSection = () => {
  const cards = [
    { id: 1, legend: "Todo en papelería", buttonText: "Ver más", image: image1 },
    { id: 2, legend: "Con Mercado Libre", buttonText: "Ver más", image: image2 },
  ];

  return (
    <div className="legend-card-section">
      {cards.map((card) => (
        <div key={card.id} className="legend-card">
          <div className="legend-content">
            <h3>{card.legend}</h3>
            <button>{card.buttonText}</button>
          </div>
          <img src={card.image} alt={`Imagen ${card.id}`} className="legend-image" />
        </div>
      ))}
    </div>
  );
};

export default LegendCardSection;

