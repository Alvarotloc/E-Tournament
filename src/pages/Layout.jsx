import styles from "../styles/Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => { //Layout es un componente que contiene el header y el outlet de react-router-dom, es decir, donde irá lo que cambia de la aplicación mientras el header se mantiene siempre
  return (
    <>
      <Header />
      <main className={styles.contenedorGeneral}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
