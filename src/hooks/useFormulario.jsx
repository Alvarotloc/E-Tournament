import { useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";

const useFormulario = () => {
  const [nombre, setNombre] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [textos, setTextos] = useState([]);

  const { isSpanish } = useIdioma();

  const textosEspaniol = [
    "Todos los campos son obligatorios",
    "Evento creado con éxito",
    "Crear Evento",
    "Nombre",
    "Ingrese el nombre del evento",
    "Participantes",
    "Ingrese el número de participantes",
    "Fecha",
    "Descripción",
    "Ingrese la descripción del evento",
    "Editar Evento",
    "Solo un evento por día"
  ];
  const textosIngles = [
    "All fields are required",
    "Event created successfully",
    "Create Event",
    "Name",
    "Enter the name of the event",
    "Participants",
    "Enter the number of participants",
    "Date",
    "Description",
    "Enter the description of the event",
    "Edit Event",
    "Only one event per day"
  ];
  useEffect(() => {
    if (isSpanish) {
      setTextos(textosEspaniol);
      return;
    }
    setTextos(textosIngles);
  }, [isSpanish]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, participantes, fecha, descripcion].includes("")) {
      toast.error(textos[0]);
      return;
    }

    try {
      const respuesta = await fetch(import.meta.env.VITE_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, participantes, fecha, descripcion }),
      });
      const respuestaJson = await respuesta.json();
      if(respuestaJson.error){
        toast.error(textos[11]);
        return;
      }
      toast.success(textos[1]);
      setNombre("");
      setParticipantes("");
      setFecha("");
      setDescripcion("");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    nombre,
    setNombre,
    participantes,
    setParticipantes,
    fecha,
    setFecha,
    descripcion,
    setDescripcion,
    textos,
    handleSubmit,
  };
};

export default useFormulario;
