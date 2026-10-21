import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [termino, setTermino] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const buscarContenido = () => {
    const q = termino.trim().toLowerCase();
    if (!q) {
      alert('Por favor ingresa un término de búsqueda.');
      return;
    }

    if (q.includes('drop') || q.includes('short') || q.includes('bolso') || q.includes('riñonera')) {
      navigate('/ultimos-drops');
    } else if (q.includes('caparazon') || q.includes('puntos') || q.includes('recompensa')) {
      navigate('/caparazones');
    } else if (q.includes('mujer') || q.includes('femenina') || q.includes('falda') || q.includes('top') || q.includes('vestido')) {
      navigate('/prendasfemeninas');
    } else if (q.includes('hombre') || q.includes('masculin') || q.includes('buzo') || q.includes('camisa') || q.includes('pantaloneta') || q.includes('zapato')) {
      navigate('/prendasmasculinas');
    } else if (q.includes('prenda') || q.includes('ropa')) {
      navigate('/prendas');
    } else if (q.includes('perfil') || q.includes('cuenta')) {
      navigate('/perfil');
    } else if (q.includes('carrito') || q.includes('compra')) {
      navigate('/carritotortugo');
    } else {
      navigate('/prendas');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buscarContenido();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          {' '}TURTLE INC
        </Link>

        <div className="busqueda">
          <input
            type="text"
            id="buscar"
            placeholder="Buscar..."
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={buscarContenido}>
            🐢
          </button>
        </div>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname.includes('ultimos-drops') ? 'active' : ''}`}
                to="/ultimos-drops"
              >
                Ultimos drops
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname.includes('caparazones') ? 'active' : ''}`}
                to="/caparazones"
              >
                Caparazones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname.includes('prendas') ? 'active' : ''}`}
                to="/prendas"
              >
                Prendas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname.includes('perfil') ? 'active' : ''}`}
                to="/perfil"
              >
                Perfil
              </Link>
            </li>

            {/* Carrito integrado en la barra negra */}
            <li className="nav-item">
              <Link to="/carritotortugo" className="boton-carrito">
                🛒
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
