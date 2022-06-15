import styles from "../styles/Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
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
