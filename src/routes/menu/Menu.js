import React from "react";
import { motion } from "framer-motion";
import image1 from '../../assets/images/servicio/Imagen1.jpg';
import image2 from '../../assets/images/servicio/Imagen2.jpg';
import image3 from '../../assets/images/servicio/Imagen3.jpg';
import image4 from '../../assets/images/servicio/Imagen4.jpg';
import image5 from '../../assets/images/servicio/Imagen5.jpg';
import image6 from '../../assets/images/servicio/Imagen6.jpg';
import image7 from '../../assets/images/servicio/Imagen7.jpg';

const services = [
  {
    title: "Asesoramiento",
    description: "Te brindamos orientación experta para ayudarte a realizar compras inteligentes en China. Evaluamos tus necesidades, presupuesto y requisitos específicos, y te proporcionamos recomendaciones sobre los productos que puedes adquirir.",
    imageUrl: image1
  },
  {
    title: "Gestión Integral",
    description: "Nos encargamos de toda la gestión de tu importación, desde el proveedor en China hasta la entrega en tu bodega o domicilio. Coordinamos el transporte, el despacho aduanal y nos aseguramos de que tus mercancías lleguen de manera eficiente y segura.",
    imageUrl: image2
  },
  {
    title: "Selección",
    description: "Contamos con una amplia red de proveedores confiables en China. Nos encargamos de investigar y seleccionar a los proveedores adecuados para tus necesidades, asegurándonos de su reputación, calidad de productos y confiabilidad.",
    imageUrl: image3
  },
  {
    title: "Control",
    description: "Realizamos un estricto control de calidad para asegurarnos de que los productos que importas cumplan con los estándares y especificaciones requeridas. Realizamos inspecciones en fábrica y evaluamos la calidad antes del envío.",
    imageUrl: image4
  },
  {
    title: "Logística",
    description: "Facilitamos el transporte de tus productos desde China hasta tu ubicación final. Trabajamos con diferentes empresas marítimas y terrestres para ofrecerte opciones de transporte que se ajusten a tus necesidades y presupuesto.",
    imageUrl: image5
  },
  {
    title: "Despacho Aduanal",
    description: "Nos encargamos del proceso de despacho aduanal, asegurándonos de que tus mercancías cumplan con todas las regulaciones y requisitos aduaneros. Trabajamos con agentes aduanales profesionales para garantizar un despacho eficiente y sin contratiempos.",
    imageUrl: image6
  },
  {
    title: "Seguro de Carga",
    description: "Protegemos tu inversión y tranquilidad mediante el aseguramiento de tus mercancías durante el transporte. Ofrecemos opciones de seguro internacional para cubrir cualquier eventualidad que pueda ocurrir durante el traslado.",
    imageUrl: image7
  }
];

const Menu = () => {
  return (
    <motion.main
      className="menu-main"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <div className="banner"></div>
      <section className="info-section">
        <div className="info-content">
          <div className="info-image"></div>
          <div className="info-text">
            <h1>Servicios</h1>
            <p>
              MarketConnect ofrece una amplia gama de servicios para facilitar y optimizar tu proceso de importación desde China. Aquí están los principales servicios que podemos ofrecerte:
            </p>
          </div>
        </div>
      </section>
      <section className="services-section">
  <h2>Nuestros servicios</h2>
  <div className="services-grid">
    {services.map((service, index) => (
      <div className="service-card" key={index}>
        <div 
          className="service-image" 
          style={{ backgroundImage: `url(${service.imageUrl})` }}
        ></div>
        <h3>{service.title}</h3>
        {service.description && (
          <div className="service-description">
            <p>{service.description}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-image"></div>
          <div className="cta-text">
            <h1>Solicita nuestros servicios</h1>
            <p>
              Nuestro servicio incluye la gestión completa de la importación de tus productos, desde el proveedor en China hasta la puerta de tu casa. Contamos con una amplia red de empresas marítimas que se adaptan a diferentes presupuestos, así como agentes aduanales profesionales que cumplen estrictamente con las leyes mexicanas para garantizar un despacho eficiente de tus mercancías.
            </p>
            <button className="cta-button">Solicitar</button>
          </div>
        </div>
      </section>
      <section className="start-importing-section">
        <div className="start-importing-content">
          <div className="start-importing-image"></div>
          <div className="start-importing-text">
            <h1>¡Comienza a importar ya!</h1>
            <p>Te brindamos orientación experta para ayudarte a realizar compras inteligentes en China.</p>
            <button className="start-importing-button">Comienza</button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Menu;
