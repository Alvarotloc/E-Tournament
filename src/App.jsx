import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IdiomaProvider } from "./context/IdiomaProvider";
import { EventosProvider } from "./context/EventosProvider";
import Calendar from "./pages/Calendar";
import Formulario from "./pages/Formulario";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormularioProvider } from "./context/FormularioProvider";

const App = () => {
  return (
    <IdiomaProvider>
      <FormularioProvider>
        <EventosProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Calendar />} />
                <Route path="/formulario" element={<Formulario />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer />s
        </EventosProvider>
      </FormularioProvider>
    </IdiomaProvider>
  );
};

export default App;
