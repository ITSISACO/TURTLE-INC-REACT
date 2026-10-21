import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BuzoOversizeMujer() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('M');

  return (
    <div className="page-detalle-producto">
      <Header title="Buzo Oversize Turtle Inc" />
      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/buso mujer 2.png" alt="Buzo" />
          <img src="/buso mujer 1.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 001623</p>

          <h1>BUZO OVERSIZE TURTLE INC</h1>

          <h2>$199.000</h2>
          <hr />

          <p>El modelo tiene una talla M.</p>

          <div className="tallas">
            {['S', 'M', 'L', 'XL'].map((talla) => (
              <button
                key={talla}
                type="button"
                style={{
                  backgroundColor: tallaSeleccionada === talla ? '#ffd000' : undefined,
                  fontWeight: tallaSeleccionada === talla ? 'bold' : undefined
                }}
                onClick={() => setTallaSeleccionada(talla)}
              >
                {talla}
              </button>
            ))}
          </div>

          <Link to="/carritotortugo">
            <button className="boton1">AGREGAR AL CARRITO</button>
          </Link>

          <Link to="/medidasmujeres">
            <button className="boton2">MEDIDAS DE UNA TALLA</button>
          </Link>

          <div className="beneficios">
            <div className="card">
              <h3>Envíos gratis</h3>
              <p>Aplica para la ropa sin descuentos.</p>
            </div>

            <div className="card">
              <h3>Llega en 7 días</h3>
              <p>Solo 7 días hábiles para ciudades principales.</p>
            </div>

            <div className="card">
              <h3>Caparazones</h3>
              <p>Recibirás por tu compra 15 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Buzo oversize para mujer confeccionado con silueta amplia y moderna.
                Máxima comodidad para tus actividades diarias con estilo urbano Turtle Inc.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 100%</li>
                <li>Beige / Crema</li>
                <li>Oversize</li>
              </ul>
            </div>

            <div className="card">
              <h3>Composición y cuidados</h3>
              <ul>
                <li>Usa lavadora en ciclo delicado</li>
                <li>No usar blanqueador</li>
                <li>Usa agua fría</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
