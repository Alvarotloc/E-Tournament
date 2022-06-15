import { useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";

const useFormulario = () => {
    const [alerta, setAlerta] = useState({ error: false, mensaje: "" });
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
      "Editar Evento"
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
      "Edit Event"
    ];
    useEffect(() => {
      if (isSpanish) {
        setTextos(textosEspaniol);
        return;
      }
      setTextos(textosIngles);
    }, [isSpanish]);
  
    useEffect(() => {
      if (alerta.mensaje) {
        setTimeout(() => {
          setAlerta({ error: false, mensaje: "" });
        }, 3000);
      }
    }, [alerta]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre, participantes, fecha, descripcion].includes("")) {
        // setAlerta({ error: true, mensaje: textos[0] });
        toast.error(textos[0]);
        return;
      }
      // setAlerta({ error: false, mensaje: textos[1] });
      toast.success(textos[1]);
    };
    return {
        alerta,
        nombre,
        setNombre,
        participantes,
        setParticipantes,
        fecha,
        setFecha,
        descripcion,
        setDescripcion,
        textos,
        handleSubmit
    };
}

export default useFormulario