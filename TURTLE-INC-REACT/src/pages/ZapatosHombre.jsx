import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/camisaprueba1.css';

export default function ZapatosHombre() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('40');

  return (
    <>
      <header>
        <h1>Zapato Hombre Turtle Inc</h1>
      </header>

      <Navbar />

      <section className="detalle-producto">
        <div className="galeria">
          <img src="/tenis 1.png" alt="Zapatos" />
          <img src="/tenis 2.png" alt="Modelo" />
          <img src="/tenis 3.png" alt="Modelo" />
          <img src="/tenis 4.png" alt="Modelo" />
        </div>

        <div className="info">
          <p className="codigo">Item: 000223</p>

          <h1>ZAPATOS URBANOS TURTLE INC</h1>

          <h2>$299.000</h2>

          <hr />

          <p>Suela antideslizante con amortiguación ergonómica.</p>

          <div className="tallas">
            {['38', '39', '40', '41', '42'].map((talla) => (
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
              <p>Recibirás por tu compra 20 caparazones.</p>
            </div>

            <div className="card">
              <h3>Métodos de pago</h3>
              <p>Tarjeta de crédito, débito y contraentrega.</p>
            </div>

            <div className="card card-grande">
              <h3>Sobre el producto</h3>
              <p>
                Tenis urbanos de diseño contemporáneo con plantilla acolchada y suela de caucho
                vulcanizado para máxima durabilidad en el asfalto.
              </p>
            </div>

            <div className="card">
              <h3>Especificaciones</h3>
              <ul>
                <li>Cuero sintético / Malla textil</li>
                <li>Blanco / Verde Turtle</li>
                <li>Plantilla Memory Foam</li>
              </ul>
            </div>

            <div className="card">
              <h3>Composición y cuidados</h3>
              <ul>
                <li>Limpiar con paño húmedo</li>
                <li>No lavar en lavadora</li>
                <li>Secar a la sombra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
