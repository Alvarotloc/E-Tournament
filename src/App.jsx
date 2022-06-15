import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IdiomaProvider } from "./context/IdiomaProvider";
import Calendar from "./pages/Calendar";
import Formulario from "./pages/Formulario";
import Layout from "./pages/Layout";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <IdiomaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Calendar />} />
            <Route path="/formulario" element={<Formulario />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </IdiomaProvider>
  );
};

export default App;
