import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BuzoHombre() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('M');

  return (
    <div className="page-detalle-producto">
      <Header title="Buzo Turtle Inc" />
      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/buso v 1.png" alt="Buzo Turtle Inc" />
          <img src="/buso v 2.png" alt="Modelo" />
          <img src="/buso v 3.png" alt="Modelo" />
          <img src="/buso v 4.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 000223</p>

          <h1>BUZO TURTLE INC</h1>

          <h2>$259.000</h2>

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

          <Link to="/medidashombre">
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
                Buzo confeccionado con materiales premium de excelente calidad,
                garantizando comodidad, calidez y estilo único con diseño exclusivo
                de Turtle Inc.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 100%</li>
                <li>Verde / Estampado</li>
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
