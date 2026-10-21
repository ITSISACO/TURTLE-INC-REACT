import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Pedido() {
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [api, setApi] = useState('');
  const [aviso, setAviso] = useState('');
  const [seguimiento, setSeguimiento] = useState('');
  const [mostrarMensajeNo, setMostrarMensajeNo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosPedido = {
      direccion: direccion.trim(),
      telefono: telefono.trim(),
      api: api.trim(),
      aviso: aviso,
      seguimiento: seguimiento
    };

    localStorage.setItem('turtlePedido', JSON.stringify(datosPedido));

    if (seguimiento === 'si') {
      navigate('/seguimiento');
    } else {
      setMostrarMensajeNo(true);
    }
  };

  const handleCerrarMensaje = () => {
    setMostrarMensajeNo(false);
    navigate('/inicio');
  };

  return (
    <div className="page-pedido">
      <main className="contenedor">
        <Link to="/inicio" className="volver">
          ‹ Back
        </Link>

        <h1>Datos para el pedido</h1>

        <form id="formPedido" onSubmit={handleSubmit}>
          {/* DIRECCIÓN */}
          <div className="campo">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Ingresa tu dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>

          {/* TELÉFONO */}
          <div className="campo">
            <label htmlFor="telefono">Número de teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresa tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          {/* API */}
          <div className="campo api">
            <label htmlFor="api">
              API <span>(opcional)</span>
            </label>
            <input
              type="text"
              id="api"
              name="api"
              placeholder="Opcional"
              value={api}
              onChange={(e) => setApi(e.target.value)}
            />
          </div>

          {/* AVISO */}
          <div className="opcion">
            <h2>Avisar cuando mi pedido sea enviado</h2>
            <div className="botones">
              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="si"
                  checked={aviso === 'si'}
                  onChange={() => setAviso('si')}
                  required
                />
                <span>Sí</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="no"
                  checked={aviso === 'no'}
                  onChange={() => setAviso('no')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* SEGUIMIENTO */}
          <div className="opcion">
            <h2>Seguir mi pedido</h2>
            <div className="botones">
              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="si"
                  checked={seguimiento === 'si'}
                  onChange={() => setSeguimiento('si')}
                  required
                />
                <span>Sí</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="no"
                  checked={seguimiento === 'no'}
                  onChange={() => setSeguimiento('no')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* CONTINUAR */}
          <button type="submit" className="continuar">
            Continuar
          </button>
        </form>
      </main>

      {/* MENSAJE SI ELIGE NO */}
      {mostrarMensajeNo && (
        <div id="mensajeNo" className="mensaje-no-seguimiento">
          <div className="tarjeta-mensaje">
            <div className="icono-mensaje">🐢</div>

            <p className="marca">TURTLE INC</p>

            <h2>¡Pedido confirmado!</h2>

            <p>
              Esperamos que tu pedido
              <br />
              llegue bien hasta tu puerta.
              <br />
              <br />
              <strong>¡Gracias por confiar en nosotros!</strong>
            </p>

            <button
              className="boton-mensaje"
              id="cerrarMensaje"
              type="button"
              onClick={handleCerrarMensaje}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
