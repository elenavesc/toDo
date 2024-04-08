import {Link} from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/" className="menu__link active">
            Inicio
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/NuevaTarea" className="menu__link">
            Nueva Tarea
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/consejos" className="menu__link">
            Consejos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;