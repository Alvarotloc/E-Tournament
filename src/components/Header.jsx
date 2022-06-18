import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import useIdioma from "../hooks/useIdioma";
import { useEffect, useState } from "react";
import ToggleIdioma from "./ToggleIdioma";
import useFormData from "../hooks/useFormData";
const Header = () => {
  const [textos, setTextos] = useState([]);
  const [navVisible, setNavVisible] = useState(false);
  const { isSpanish } = useIdioma();
  const { pathname } = useLocation();
  const { setObjetoEditar } = useFormData();

  useEffect(() => {
    if (isSpanish) {
      setTextos(["Agregar", "Calendario"]);
      return;
    }
    setTextos(["Add", "Calendar"]);
  }, [isSpanish]);

  return (
    <header className={styles.header} onClick={() => setObjetoEditar({})}>
      <img src="./imgs/LogoHeader.svg" alt="Logo de la empresa" />
      <nav
        className={navVisible ? styles.visible : ""}
        onClick={() => setNavVisible(false)}
      >
        <Link
          to="/formulario"
          className={pathname === "/formulario" ? styles.enlaceActual : ""}
        >
          {textos[0]}
        </Link>
        <Link to="/" className={pathname === "/" ? styles.enlaceActual : ""}>
          {textos[1]}
        </Link>
        <ToggleIdioma />
      </nav>
      <div
        className={`${styles.hamburguer} ${navVisible ? styles.cerrar : ""}`}
        onClick={() => setNavVisible(!navVisible)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
