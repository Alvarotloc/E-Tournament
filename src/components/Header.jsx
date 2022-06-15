import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import useIdioma from "../hooks/useIdioma";
import { useEffect, useState } from "react";
import ToggleIdioma from "./ToggleIdioma";
const Header = () => {
  const [textos, setTextos] = useState([]);
  const { isSpanish } = useIdioma();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isSpanish) {
      setTextos(["Agregar", "Calendario"]);
      return;
    }
    setTextos(["Add", "Calendar"]);
  }, [isSpanish]);

  return (
    <header className={styles.header}>
      <img src="./imgs/LogoHeader.svg" alt="Logo de la empresa" />
      <nav>
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
    </header>
  );
};

export default Header;
