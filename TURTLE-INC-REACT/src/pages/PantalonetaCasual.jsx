import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/camisaprueba1.css';

export default function PantalonetaCasual() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('M');

  return (
    <>
      <header>
        <h1>Pantaloneta Casual Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/pantaloneta .png" alt="pantaloneta" />
          <img src="/pantaloneta 2.png" alt="Modelo" />
          <img src="/pantaloneta 3.png" alt="Modelo" />
          <img src="/pantaloneta 1.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 004423</p>

          <h1>PANTALONETA CASUAL TURTLE INC</h1>

          <h2>$79.000</h2>

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
              <p>Recibirás por tu compra 8 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Pantaloneta casual de secado rápido con cordón de ajuste en cintura
                y bolsillos laterales. Máxima ligereza para los días cálidos.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Poliéster de Secado Rápido</li>
                <li>Azul Marino / Estampado</li>
                <li>Above the knee fit</li>
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
