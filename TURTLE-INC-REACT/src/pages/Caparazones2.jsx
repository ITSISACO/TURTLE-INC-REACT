import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Caparazones2() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <div className="page-caparazones2">
      <Header title="Caparazones" />
      <Navbar />

      <main>
        <h1>Bienvenido a Caparazones</h1>
        <div className="parrafos">
          <p>Los Caparazones son el sistema de recompensas de Turtle Inc.</p>
          <p>Cada compra suma puntos que podrás cambiar por descuentos exclusivos.</p>
        </div>

        <h1 style={{ marginTop: '40px' }}>RECOMPENSAS</h1>

        <div className="recompensas">
          <div className="card">
            <h2>25% DE DESCUENTO</h2>
            <h3>100 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>
              Canjear
            </button>
          </div>

          <div className="card">
            <h2>50% DE DESCUENTO</h2>
            <h3>200 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>
              Canjear
            </button>
          </div>

          <div className="card">
            <h2>75% DE DESCUENTO</h2>
            <h3>350 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>
              Canjear
            </button>
          </div>

          <div className="card">
            <h2>99% DE DESCUENTO</h2>
            <h3>666 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>
              Canjear
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* VENTANA EMERGENTE (MODAL) */}
      <div
        id="modal-canje"
        className="modal-overlay"
        style={{ display: modalAbierto ? 'flex' : 'none' }}
      >
        <div className="modal-contenido">
          <div className="modal-icono">
            <span>✓</span>
          </div>
          <span className="modal-subtitulo">TURTLE INC</span>
          <h2 className="modal-titulo">¡Caparazones canjeados!</h2>
          <p className="modal-texto">
            Tus caparazones han sido canjeados con éxito.<br />
            <strong>Turtle Inc 🐢</strong>
          </p>
          <button className="btn-aceptar" onClick={cerrarModal}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
