import { Link, useNavigate } from 'react-router-dom';

export default function OlvidasteContrasena() {
  const navigate = useNavigate();

  const handleEnviarCodigo = (e) => {
    e.preventDefault();
    alert('Código enviado a tu correo');
  };

  const handleCambiar = (e) => {
    e.preventDefault();
    navigate('/nuevacontrasena');
  };

  return (
    <div className="page-olvidastecontrasena">
      <div className="dropdown-menu">
        <form className="px-4 py-3" onSubmit={handleCambiar}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleEnviarCodigo} style={{ marginBottom: '15px' }}>
            <span style={{ color: 'black' }}>Enviar código</span>
          </button>

          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Codigo</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3"></div>
          <button type="submit" className="btn btn-primary">
            <Link to="/nuevacontrasena" style={{ color: 'black', textDecoration: 'none', display: 'block' }}>
              Cambiar contraseña
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
