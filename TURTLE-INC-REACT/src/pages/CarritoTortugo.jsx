import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CarritoTortugo() {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([
    {
      id: 0,
      nombre: 'Camiseta Turtle INC',
      descripcion: 'Camiseta negra',
      precio: 199000,
      imagen: '/camisa h (2).png',
      cantidad: 1,
      visible: true
    },
    {
      id: 1,
      nombre: 'Top mujer Turtle INC',
      descripcion: 'Top mujer',
      precio: 69000,
      imagen: '/topmujer.png',
      cantidad: 1,
      visible: true
    }
  ]);

  const cambiarCantidad = (index, cambio) => {
    setProductos((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const nuevaCantidad = item.cantidad + cambio;
          return { ...item, cantidad: nuevaCantidad < 1 ? 1 : nuevaCantidad };
        }
        return item;
      })
    );
  };

  const eliminarProducto = (index) => {
    setProductos((prev) =>
      prev.map((item, i) => (i === index ? { ...item, visible: false, cantidad: 0 } : item))
    );
  };

  const total = productos.reduce((sum, item) => {
    return item.visible ? sum + item.precio * item.cantidad : sum;
  }, 0);

  const guardarCarritoAntesDeComprar = (e) => {
    if (total === 0) {
      e.preventDefault();
      alert('Tu carrito está vacío. Agrega productos antes de continuar.');
      return;
    }

    const cantidades = productos.map((p) => (p.visible ? p.cantidad : 0));
    const resumenCarrito = {
      total: total,
      cantidades: cantidades
    };

    localStorage.setItem('carritoTurtle', JSON.stringify(resumenCarrito));
    navigate('/pedido');
  };

  return (
    <div className="page-carritotortugo">
      <Header title="Carrito de Compras" />
      <Navbar />

      <main className="carrito">
        <Link to="/prendas" className="volver">
          ‹ Back
        </Link>

        <h2>Mis productos</h2>

        {/* PRODUCTO 1 */}
        {productos[0].visible && (
          <div className="producto-carrito">
            <img src={productos[0].imagen} alt={productos[0].nombre} />

            <div className="producto-info">
              <h3>{productos[0].nombre}</h3>
              <p>{productos[0].descripcion}</p>
            </div>

            <div className="precio">$199.000</div>

            <div className="cantidad">
              <button type="button" onClick={() => cambiarCantidad(0, -1)}>
                -
              </button>

              <span id="cantidad0">{productos[0].cantidad}</span>

              <button type="button" onClick={() => cambiarCantidad(0, 1)}>
                +
              </button>
            </div>

            <button
              type="button"
              className="eliminar"
              onClick={() => eliminarProducto(0)}
            >
              x
            </button>
          </div>
        )}

        {/* PRODUCTO 2 */}
        {productos[1].visible && (
          <div className="producto-carrito">
            <img src={productos[1].imagen} alt={productos[1].nombre} />

            <div className="producto-info">
              <h3>{productos[1].nombre}</h3>
              <p>{productos[1].descripcion}</p>
            </div>

            <div className="precio">$69.000</div>

            <div className="cantidad">
              <button type="button" onClick={() => cambiarCantidad(1, -1)}>
                -
              </button>

              <span id="cantidad1">{productos[1].cantidad}</span>

              <button type="button" onClick={() => cambiarCantidad(1, 1)}>
                +
              </button>
            </div>

            <button
              type="button"
              className="eliminar"
              onClick={() => eliminarProducto(1)}
            >
              x
            </button>
          </div>
        )}

        {/* TOTAL */}
        <div className="total">
          Total: <strong id="total">${total.toLocaleString('es-CO')}</strong>
        </div>

        {/* BOTÓN FINALIZAR COMPRA */}
        <button
          type="button"
          className="comprar"
          onClick={guardarCarritoAntesDeComprar}
          style={{ cursor: 'pointer' }}
        >
          Finalizar compra 🐢
        </button>
      </main>

      <Footer />
    </div>
  );
}
