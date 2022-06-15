import styles from "../styles/Layout.module.css";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <img src="./imgs/LogoHeader.svg" alt="Logo de la empresa" />
      </header>
      <main className={styles.contenedorGeneral}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
