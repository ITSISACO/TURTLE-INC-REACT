import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/camisaprueba1.css';

export default function GorraBlanca() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('Única');

  return (
    <>
      <header>
        <h1>Gorra Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/gorra 1.png" alt="Gorra" />
          <img src="/gorra 2.png" alt="Modelo" />
          <img src="/gorra 3 (2).png" alt="Modelo" />
          <img src="/gorra 4.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 000023</p>

          <h1>GORRA TURTLE INC</h1>

          <h2>$59.000</h2>

          <hr />

          <p>Gorra ajustable con broche metálico.</p>

          <div className="tallas">
            {['Única'].map((talla) => (
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
              <p>Recibirás por tu compra 5 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Gorra con visera curva y bordado frontal en relieve. Fabricada en algodón
                transpirable de alta resistencia.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Algodón 100%</li>
                <li>Blanco / Verde</li>
                <li>Ajuste posterior regulable</li>
              </ul>
            </div>

            <div className="card">
              <h3>Composición y cuidados</h3>
              <ul>
                <li>Lavar a mano con agua fría</li>
                <li>No retorcer</li>
                <li>Secar a la sombra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
