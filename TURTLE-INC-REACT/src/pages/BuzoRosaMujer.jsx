import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BuzoRosaMujer() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  return (
    <div className="page-detalle-producto">
      <Header title="Buzo Rosa Mujer Turtle Inc" />
      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/buzo rosa 4.png" alt="Buzo rosa" />
          <img src="/buzo rosa 1.png" alt="Modelo" />
          <img src="/buzo rosa 2.png" alt="Modelo" />
          <img src="/buzo rosa 3.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 00003</p>

          <h1>BUZO ROSA TURTLE INC</h1>

          <h2>$189.000</h2>

          <hr />

          <p>El modelo mide 1.60 m y tiene una talla S.</p>

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
                Buzo rosa confeccionado en tela suave y abrigada, con tonalidad pastel
                y corte ergonómico pensado en la silueta femenina.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 100%</li>
                <li>Rosa Pastel</li>
                <li>Regular Fit</li>
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
