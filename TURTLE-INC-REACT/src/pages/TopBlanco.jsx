import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/camisaprueba1.css';

export default function TopBlanco() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  return (
    <>
      <header>
        <h1>TOP BLANCO</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/top blanco mujer.png" alt="Top blanco" />
          <img src="/top blanco (2).png" alt="Modelo" />
          <img src="/top blanco.png" alt="Modelo" />
          <img src="/top modelo (2).png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 000228</p>

          <h1>TOP BLANCO</h1>

          <h2>$69.000</h2>

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
              <p>Recibirás por tu compra 10 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Top blanco femenino de algodón con elastano para un ajuste elástico
                y cómodo. Logotipo Turtle Inc en miniatura bordado al frente.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 95% / Elastano 5%</li>
                <li>Blanco</li>
                <li>Cropped Fit</li>
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
