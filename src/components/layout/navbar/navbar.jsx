import CartWidget from "../../common/cartWidget/cartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul className="nav-container">
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Productos</a>
        </li>
        <li>
          <a>Sale</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
