import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Seguimiento() {
  const navigate = useNavigate();

  const [direccion] = useState(() => {
    try {
      const datos = JSON.parse(localStorage.getItem('turtlePedido') || '{}');
      if (datos.direccion) {
        return 'Entregando en: ' + datos.direccion;
      }
    } catch {
      // ignore
    }
    return 'Preparando la entrega...';
  });

  const [entregado, setEntregado] = useState(false);
  const [mostrarModalFinal, setMostrarModalFinal] = useState(false);

  const handleLlego = () => {
    setEntregado(true);
    setMostrarModalFinal(true);
  };

  const cerrarMensaje = () => {
    localStorage.removeItem('turtlePedido');
    navigate('/inicio');
  };

  return (
    <div className="page-seguimiento">
      <main className="telefono">
        <div className="barra-superior">
          <Link to="/pedido">‹ Back</Link>
          <span>9:41</span>
        </div>

        <section className="contenido">
          <div className="tortuga">🐢</div>

          <p className="marca">TURTLE INC</p>

          <h1>
            SEGUIMIENTO
            <br />
            DE TU PEDIDO
          </h1>

          {/* MAPA */}
          <div className="mapa" aria-label="Mapa de seguimiento">
            <div className="ruta"></div>
            <div className="pin">●</div>
            <div className="punto p1"></div>
            <div className="punto p2"></div>
            <div className="punto p3"></div>
          </div>

          {/* ESTADO */}
          <div className="estado">
            <span
              className={`pulso ${entregado ? 'completo' : ''}`}
              id="pulso"
            ></span>

            <div>
              <strong
                id="estadoTexto"
                style={{ color: entregado ? '#299367' : undefined }}
              >
                {entregado ? '¡Tu pedido ya llegó!' : 'Tu pedido está en camino'}
              </strong>

              <small id="direccionTexto">{direccion}</small>
            </div>
          </div>

          {/* PROGRESO */}
          <div className="progreso">
            <div className="linea"></div>

            <div className="paso activo">
              <span>✓</span>
              <small>
                Pedido
                <br />
                confirmado
              </small>
            </div>

            <div className="paso activo">
              <span>✓</span>
              <small>En camino</small>
            </div>

            <div className={`paso ${entregado ? 'activo' : ''}`}>
              <span>{entregado ? '✓' : '3'}</span>
              <small>Entregado</small>
            </div>
          </div>

          {/* BOTÓN */}
          <button id="llegoBtn" className="llego" onClick={handleLlego}>
            YA LLEGÓ MI PEDIDO
          </button>

          <button
            className="volver-pedido"
            type="button"
            onClick={() => navigate('/pedido')}
          >
            ← Volver a mis datos
          </button>
        </section>
      </main>

      {/* MENSAJE FINAL */}
      {mostrarModalFinal && (
        <div id="mensajeFinal" className="modal">
          <div className="celebracion">
            <div className="check">✓</div>

            <p className="marca">TURTLE INC</p>

            <h2>¡Pedido entregado!</h2>

            <p>
              Gracias por confiar en nosotros,
              <br />
              esperamos te guste tu pedido
              <br />
              <strong>Turtle Inc</strong> 🐢
            </p>

            <button type="button" onClick={cerrarMensaje}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
