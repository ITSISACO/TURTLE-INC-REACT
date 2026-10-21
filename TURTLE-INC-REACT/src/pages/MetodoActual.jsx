import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MetodoActual() {
  const navigate = useNavigate();

  return (
    <div className="page-metodo-actual">
      <Header title="Método de Pago" />
      <Navbar />

      <main>
        <section className="contenedor">
          <h2>Método de Pago Actual</h2>

          <div className="tarjeta">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNGdbqsun1jR_HaStAiMjCxRHj68WLGTl3-_5574erg&s=10"
              alt="Nequi"
            />

            <div className="datos">
              <p><strong>Tipo:</strong> Nequi</p>
              <p><strong>Titular:</strong> Usuario</p>
              <p><strong>Número:</strong> **** **** **** 4589</p>
              <p><strong>Vence:</strong> 08/29</p>
            </div>
          </div>

          <div className="acciones">
            <button
              type="button"
              onClick={() => navigate('/verificar')}
            >
              Verificar tarjeta
            </button>

            <button
              type="button"
              onClick={() => navigate('/eliminar-metodo')}
            >
              Eliminar tarjeta
            </button>

            <button
              type="button"
              onClick={() => navigate('/ingresar-tarjeta')}
            >
              Agregar nueva tarjeta
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
