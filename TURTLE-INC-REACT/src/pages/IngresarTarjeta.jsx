import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function IngresarTarjeta() {
  const navigate = useNavigate();
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const mostrarMensaje = () => {
    setMensajeVisible(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 50);
  };

  return (
    <div className="page-ingresar-tarjeta">
      <Header title="Registrar Nueva Tarjeta" />
      <Navbar />

      <main>
        <section className="contenedor">
          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="Tarjeta de crédito"
            className="tarjeta-icono-header"
          />

          <h2>Agregar Nuevo Método de Pago</h2>

          <p>
            Ingresa los datos de tu nueva tarjeta para continuar realizando tus compras de forma segura.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); mostrarMensaje(); }}>
            <label>Número de tarjeta</label>
            <input type="text" placeholder="1234 5678 9012 3456" />

            <label>Nombre del titular</label>
            <input type="text" placeholder="Nombre completo" />

            <div className="fila">
              <div className="campo">
                <label>Fecha de vencimiento</label>
                <input type="text" placeholder="MM/AA" />
              </div>

              <div className="campo">
                <label>CVV</label>
                <input type="password" placeholder="123" />
              </div>
            </div>

            <button type="button" className="btn-guardar" onClick={mostrarMensaje}>
              Guardar Tarjeta
            </button>

            <button
              type="button"
              className="volver"
              onClick={() => navigate('/perfil')}
            >
              Volver al Perfil
            </button>
          </form>

          <div
            id="mensaje"
            className="mensaje-exito"
            style={{ display: mensajeVisible ? 'block' : 'none' }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="Correcto"
            />

            <h3>¡Tu tarjeta ha sido guardada!</h3>

            <p>
              Tu nuevo método de pago fue registrado correctamente.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
