import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EliminarMetodo() {
  const navigate = useNavigate();

  return (
    <div className="page-eliminar-metodo">
      <Header title="Eliminar Método de Pago" />
      <Navbar />

      <main>
        <section className="contenedor">
          <img
            src="https://www.elpais.com.co/resizer/v2/IHQWMUXY2JCZBFPNHJ25HBMMOI.jpg?auth=d44315b6366fbec9ecec981ac4bcf171caace9840e13014765ef557bb9c91e66&smart=true&quality=75&width=1280&height=720"
            alt="Tarjeta"
          />

          <h2>¿Deseas eliminar este método de pago?</h2>

          <p>
            Al eliminar este método de pago ya no podrás utilizarlo para
            realizar compras en la plataforma.
          </p>

          <div className="tarjeta">
            <h3>Tarjeta registrada</h3>

            <p><strong>Tipo:</strong> Nequi</p>
            <p><strong>Número:</strong> **** **** **** 4589</p>
            <p><strong>Propietario:</strong> Santiago Osorno</p>
          </div>

          <div className="advertencia">
            ⚠ Esta acción no se puede deshacer.
          </div>

          <div className="botones">
            <button
              className="eliminar"
              type="button"
              onClick={() => navigate('/ingresar-tarjeta')}
            >
              Eliminar Método
            </button>

            <button
              className="cancelar"
              type="button"
              onClick={() => navigate('/perfil')}
            >
              Cancelar
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
