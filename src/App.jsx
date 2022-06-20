import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IdiomaProvider } from "./context/IdiomaProvider";
import { EventosProvider } from "./context/EventosProvider";
import Calendar from "./pages/Calendar";
import Formulario from "./pages/Formulario";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormularioProvider } from "./context/FormularioProvider";

const App = () => { //El componente de App es el componente principal de la aplicación, se envuelve en un BrowserRouter para que se pueda navegar entre las distintas páginas y también se envuelve entre los contextos para que sea accesible a todos los niveles
  return (
    <IdiomaProvider>
      <FormularioProvider>
        <EventosProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Calendar />} /> {/*El index significa que será el primero que se volcará en el outlet y aparecerá en la ruta base */}
                <Route path="/formulario" element={<Formulario />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer /> {/*Es necesario para el funcionamiento de react-toastify */}
        </EventosProvider>
      </FormularioProvider>
    </IdiomaProvider>
  );
};

export default App;
