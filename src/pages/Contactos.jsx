import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import './Contactos.css'

const Contactos = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1>Contactos</h1>

      <form
        style={{
          maxWidth: '600px',
          margin: '2rem auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>

        <label>
          Correo electrónico:
          <input type="email" name="email" required />
        </label>

        <label>
          Asunto:
          <input type="text" name="asunto" />
        </label>

        <label>
          Mensaje:
          <textarea name="mensaje" rows="5" required />
        </label>

        <button type="submit">Enviar mensaje</button>
      </form>

      <Footer />
    </>
  );
};

export default Contactos;
