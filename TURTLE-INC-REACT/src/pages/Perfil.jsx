import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="page-perfil">
      <Header title="Perfil de Usuario" />
      <Navbar />

      <main>
        <section className="perfil-info">
          <h2>Información del Usuario</h2>

          <img
            src="https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
            alt="Avatar del usuario"
            width="120"
            height="120"
          />

          <h1>Datos de usuario</h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nombre">Nombre:</label>
            <br />
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
            />
            <br />
            <br />

            <label htmlFor="correo">Correo electrónico:</label>
            <br />
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Escribe tu correo"
            />
            <br />
            <br />
          </form>

          <div className="botones">
            <button
              type="button"
              onClick={() => navigate('/metodo-actual')}
            >
              Método de pago actual
            </button>

            <button
              type="button"
              onClick={() => navigate('/eliminar-metodo')}
            >
              Eliminar método de pago
            </button>

            <button
              type="button"
              onClick={() => navigate('/verificar')}
            >
              Verificar método de pago
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
