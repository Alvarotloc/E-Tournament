import { Link, useLocation } from "react-router-dom"; // Importamos lo necesario de react router dom para hacer navegación interna y utilizar el path actual
import styles from "../styles/Layout.module.css";
import useIdioma from "../hooks/useIdioma";
import { useEffect, useState } from "react";
import ToggleIdioma from "./ToggleIdioma";
import useFormData from "../hooks/useFormData";
import Logo from "./Logo";
const Header = () => {
  const [textos, setTextos] = useState([]); //Creamos el state de textos para cambiar entre inglés y español
  const [navVisible, setNavVisible] = useState(false); //Creamos el state de navVisible para mostrar u ocultar el nav
  const { isSpanish } = useIdioma(); //Hacemos una referencia al contexto de idioma
  const { pathname } = useLocation(); //Hacemos una referencia al path actual
  const { setObjetoEditar } = useFormData(); //Hacemos una referencia al contexto de formData para setear el objeto a editar

  useEffect(() => { //creamos un useEffect que compruebe si la pagina está en inglés o español y así setear los textos
    if (isSpanish) {
      setTextos(["Agregar", "Calendario"]);
      return;
    }
    setTextos(["Add", "Calendar"]);
  }, [isSpanish]);

  return (
    <header className={styles.header} onClick={() => setObjetoEditar({}) }> {/*Cada vez que se toque el header se resetea el objeto a editar para que si cambia de pagina no pueda volver a editar un evento a no ser que haga click en el dia corresponiente */}
      <Logo />
      <nav
        className={navVisible ? styles.visible : ""}
        onClick={() => setNavVisible(false)}
      >
        <Link
          to="/formulario"
          className={pathname === "/formulario" ? styles.enlaceActual : ""} //Si el path actual es igual al de la pagina de formulario se le aplica el estilo de enlace actual
        >
          {textos[0]}
        </Link>
        <Link to="/" className={pathname === "/" ? styles.enlaceActual : ""}>
          {textos[1]}
        </Link>
        <ToggleIdioma />
      </nav>
      <div
        className={`${styles.hamburguer} ${navVisible ? styles.cerrar : ""}`} //Cambiamos el estilo del menú de hamburguesa dependiendo si está cerrado o abierto
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
