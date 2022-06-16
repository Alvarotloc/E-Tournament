import { useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";
import useEventos from "./useEventos";
import useFormData from "./useFormData";

const useFormulario = () => {
  const [textos, setTextos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { isSpanish } = useIdioma();
  const { eventos, setEventos } = useEventos();
  const {objetoEditar, setObjetoEditar} = useFormData();

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
    "Solo puedes crear un evento por día",
    "Debes cambiar al menos un campo",
    "Evento editado con éxito",
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
    "Only one event per day",
    "You must change at least one field",
    "Event edited successfully",
  ];

  useEffect(() => {
    if(Object.keys(objetoEditar).length > 0){
      setNombre(objetoEditar.nombre);
      setParticipantes(objetoEditar.participantes);
      setFecha(objetoEditar.fecha);
      setDescripcion(objetoEditar.descripcion);
    }
  },[objetoEditar]);

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

    if(Object.keys(objetoEditar).length > 0){
      if(objetoEditar.nombre === nombre && objetoEditar.participantes === participantes && objetoEditar.fecha === fecha && objetoEditar.descripcion === descripcion){
        toast.error(textos[12]);
        return;
      }
      try {
        const respuesta = await fetch(import.meta.env.VITE_BACKEND_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, participantes, fecha, descripcion, _id : objetoEditar._id }),
        });
        const respuestaJson = await respuesta.json();
        if (respuestaJson.error) {
          toast.error(textos[11]);
          return;
        }
        setEventos(eventos.map((evento) => (evento._id === objetoEditar._id ? respuestaJson : evento)));
        toast.success(textos[13]);
        setNombre("");
        setParticipantes("");
        setFecha("");
        setDescripcion("");
        setObjetoEditar({});
      } catch (error) {
        console.log(error);
      }
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
      if (respuestaJson.error) {
        toast.error(textos[11]);
        return;
      }
      setEventos([...eventos, respuestaJson]);
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
