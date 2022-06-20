import * as ReactDOMClient from "react-dom/client";
import "./globals.css";
import App from "./App";
const contenedor = document.getElementById("root");
const root = ReactDOMClient.createRoot(contenedor); //Utilizamos createRoot ya que es la nueva sintaxis de react18
root.render(<App />);
