import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/topmujerprueba.css';

export default function TopMujerPrueba() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  return (
    <>
      <header>
        <h1>Top Mujer Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/topmujer.png" alt="Top mujer" />
          <img src="/topmujer2.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 0000228</p>

          <h1>TOP TURTLE INC</h1>

          <h2>$129.000</h2>

          <hr />

          <p>El modelo mide 1.62 m y tiene una talla S.</p>

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
              <p>Recibirás por tu compra 10 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Camisa Oversize confeccionada con un texturizado premium
                de alto gramaje, de 220gr de peso. Con estampación en frente
                y atrás de excelente calidad. Además lleva bordado que se
                mezcla con la estampación.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 100%</li>
                <li>Negro</li>
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
    </>
  );
}
