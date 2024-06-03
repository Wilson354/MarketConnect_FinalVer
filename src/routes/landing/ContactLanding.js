import React from "react";
import { motion } from "framer-motion";

const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Contactanos </h3>
        <p>¿Tienes alguna pregunta o sugerencia? Nos encantaría oírla</p>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4>Envíanos un mensaje:</h4>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </motion.form>
      </motion.div>
    </article>
  );
}

export default ContactLanding;
