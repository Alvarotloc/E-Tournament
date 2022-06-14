import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Formulario from "./pages/Formulario";
import Layout from "./pages/Layout";

const App = () => {
  console.log(new Date(1, 2022, 0));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Calendar />} />
          <Route path="/formulario" element={<Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
