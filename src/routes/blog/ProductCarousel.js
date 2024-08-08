import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos predeterminados del carrusel
import productImage from "../../assets/images/catalogo/0X4A2101.jpg"; 
import productImage2 from "../../assets/images/catalogo/0X4A2102.jpg";
import productImage3 from "../../assets/images/catalogo/0X4A2118.jpg";
import productImage4 from "../../assets/images/catalogo/0X4A2119.jpg";
import productImage5 from "../../assets/images/catalogo/0X4A2139.jpg";
import productImage6 from "../../assets/images/catalogo/0X4A2185.jpg";
import productImage7 from "../../assets/images/catalogo/0X4A2186.jpg";
import productImage8 from "../../assets/images/catalogo/0X4A2198.jpg";
import productImage9 from "../../assets/images/catalogo/0X4A2205.jpg";
import productImage10 from "../../assets/images/catalogo/biciroja.jpeg";

const ProductCarousel = () => {
  // Ejemplo de datos de productos (puedes sustituir esto con tu propia lógica de datos)
  const products = [
    { id: 1, name: "Libreta Pop-in Sirena", price: "$100", description: "Libreta ideal para regreso a clases", image: productImage },
    { id: 2, name: "Libreta Pop-in Auto", price: "$120", description: "Libreta ideal para regreso a clases", image: productImage2 },
    { id: 3, name: "Tupper transparente", price: "$80", description: "Indispensable para el orden del hogar", image: productImage3 },
    { id: 4, name: "Tupper rosa transparente", price: "$90", description: "Indispensable para el orden del hogar", image: productImage4 },
    { id: 5, name: "Paquete de colores", price: "$110", description: "Ideal para el regreso a clases", image: productImage5 },
    { id: 6, name: "Figura Robot de 1576 piezas", price: "$1199", description: "Diversion que los niños pueden construir", image: productImage6 },
    { id: 7, name: "Figura Robot de 1630 piezas", price: "$1199", description: "Diversion que los niños pueden construir", image: productImage7 },
    { id: 8, name: "Carreta color negro", price: "$130", description: "Para transportar tus objetos a donde sea", image: productImage8 },
    { id: 9, name: "Mesa larga para eventos", price: "$75", description: "Ideal para fiestas y eventos grandes", image: productImage9 },
    { id: 10, name: "Bicicleta roja", price: "$150", description: "Diversion y ejercicio unidos en un producto", image: productImage10 }
  ];

  // Dividir productos en grupos de 5
  const groupedProducts = [];
  while (products.length > 0) {
    groupedProducts.push(products.splice(0, 5));
  }

  return (
    <div>
      <h2 style={{ color: "white" }}>Productos destacados</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}  // Cambiar a tu preferencia de intervalo de cambio automático
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
      >
        {groupedProducts.map((group, index) => (
          <div key={index} style={{ display: "flex" }}>
            {group.map((product) => (
              <div 
                key={product.id} 
                style={{ 
                  flex: "1", 
                  margin: "10px", 
                  background: "white", 
                  color: "black", 
                  padding: "20px", 
                  borderRadius: "8px", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between"
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    width: "100%", 
                    maxHeight: "200px", 
                    objectFit: "cover", 
                    borderRadius: "8px", 
                    marginBottom: "10px" 
                  }} 
                />
                <div style={{ flexGrow: 1 }}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
                <button 
                  style={{ 
                    marginTop: "10px", 
                    padding: "10px", 
                    backgroundColor: "#ff9900", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "4px", 
                    cursor: "pointer" 
                  }}
                  onClick={() => window.location.href = "https://www.mercadolibre.com"}
                >
                  Ver en Mercado Libre
                </button>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
