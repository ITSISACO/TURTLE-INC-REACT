import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ConjuntoHombreBuzoYSudadera() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('M');

  return (
    <div className="page-detalle-producto">
      <Header title="Conjunto Turtle Inc" />
      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/conjunto hombre 12.png" alt="Conjunto" />
          <img src="/conjunto hombre (3).png" alt="Modelo" />
          <img src="/conjunto hombre(2).png" alt="Modelo" />
          <img src="/conjunto hombre.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 000553</p>

          <h1>CONJUNTO TURTLE INC</h1>

          <h2>$379.000</h2>

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
              <p>Recibirás por tu compra 25 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Conjunto completo para hombre compuesto por buzo y sudadera combinados.
                Fabricado con materiales de alta durabilidad y máximo confort térmico.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 80% / Poliéster 20%</li>
                <li>Gris / Negro</li>
                <li>Comfort Fit</li>
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
