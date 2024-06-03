import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const WelcomeSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.article 
      className="welcome-section" 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <h2 className="txt-white" style={{ fontSize: '2.5rem' }}>
          ¿Por qué nosotros? 
        </h2>
        <div className="info-columns">
          <div className="left-column">
            <div className='container'>
              <div className='subtitle-card'>
                <h3>Te brindamos apoyo en todas las etapas de tu importación desde China.</h3>
              </div>
              <p>
                Te ayudamos a realizar compras inteligentes, 
                identificando los productos que puedes adquirir de acuerdo a tu presupuesto. 
                Además, mantenemos una comunicación constante contigo, proporcionándote información 
                sobre la entrega de tus productos a la bodega y asegurándonos de que la calidad sea la esperada.
              </p>
            </div>
          </div>
          <div className="right-column">
            <div className='container'>
              <div className='subtitle-card'>
                <h3>La gestión completa de la importación de tus productos.</h3>
              </div>
              <p>
                Desde el proveedor en China hasta la puerta de tu casa. Contamos con una amplia 
                red de empresas marítimas que se adaptan a diferentes presupuestos, así como 
                agentes aduanales profesionales que cumplen estrictamente con las leyes mexicanas 
                para garantizar un despacho eficiente de tus mercancías.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
}

export default WelcomeSection;
