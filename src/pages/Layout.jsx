import styles from '../styles/Header.module.css';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <header className={styles.header}>
        <img src="./imgs/LogoHeader.png" alt="Logo de la empresa" />
    </header>
    <main>
        <div className="contenedor-general">
            <Outlet />
        </div>
    </main>
    </>
  )
}

export default Layout;