import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/camisaprueba1.css';

export default function VestidoDeBano() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  return (
    <>
      <header>
        <h1>Vestido de baño Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/traje de baño.png" alt="Vestido de Baño" />
          <img src="/traje de baño 2.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 00043</p>

          <h1>VESTIDO DE BAÑO TURTLE INC</h1>

          <h2>$199.000</h2>

          <hr />

          <p>El modelo tiene una talla S.</p>

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
                Traje de baño de una sola pieza con forro interior suave, secado express
                y resistencia al cloro y rayos solares.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Poliamida 82% / Elastano 18%</li>
                <li>Estampado Turtle</li>
                <li>Protección UV50+</li>
              </ul>
            </div>

            <div className="card">
              <h3>Composición y cuidados</h3>
              <ul>
                <li>Lavar a mano con agua dulce tras cada uso</li>
                <li>No usar blanqueador</li>
                <li>Secar a la sombra sin retorcer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
