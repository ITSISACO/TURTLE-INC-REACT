import { Link, useNavigate } from 'react-router-dom';

export default function NuevaContrasena() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contraseña actualizada correctamente');
    navigate('/inicio');
  };

  return (
    <div className="page-olvidastecontrasena">
      <div className="dropdown-menu">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Nueva contraseña </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="Nueva contraseña"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Confirmar contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Confirmar contraseña"
              required
            />
          </div>
          <div className="mb-3"></div>
          <button type="submit" className="btn btn-primary">
            <Link to="/inicio" style={{ color: 'black', textDecoration: 'none', display: 'block' }}>
              Cambiar contraseña
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
