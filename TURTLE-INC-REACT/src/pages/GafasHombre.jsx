import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GafasHombre() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('Única');

  return (
    <>
      <header>
        <h1>Gafas Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/gafa1.png" alt="Gafas" />
          <img src="/gafa2.png" alt="Modelo" />
          <img src="/gafa3.png" alt="Modelo" />
          <img src="/gafa4.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 005223</p>

          <h1>GAFAS TURTLE INC</h1>

          <h2>$499.000</h2>

          <hr />

          <p>Talla única con protección UV400.</p>

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
              <p>Recibirás por tu compra 30 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Gafas de sol de alta gama Turtle Inc con lentes polarizados de alta definición
                y marco resistente de acetato premium.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Lente UV400 Polarizado</li>
                <li>Montura de Acetato</li>
                <li>Funda rígida incluida</li>
              </ul>
            </div>

            <div className="card">
              <h3>Composición y cuidados</h3>
              <ul>
                <li>Limpiar con paño de microfibra</li>
                <li>Guardar siempre en su estuche</li>
                <li>No exponer a solventes abrasivos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
