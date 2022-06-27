import { useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";
import useEventos from "./useEventos";
import useFormData from "./useFormData";

const useFormulario = () => { //Creamos un custom hook para sacar toda la lógica de la pagina de formulario
  // Creamos los states para formulario
  const [textos, setTextos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cargando, setCargando] = useState(false);

  // Desestructuramos los datos de los context necesarios
  const { isSpanish } = useIdioma();
  const { eventos, setEventos } = useEventos();
  const { objetoEditar, setObjetoEditar } = useFormData();

  // Creamos una constante con los textos en español y otra con los textos en inglés
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
    "Edit Event",
    "Only one event per day",
    "You must change at least one field",
    "Event edited successfully",
    "Edit Event"
  ];

  useEffect(() => {
    if (Object.keys(objetoEditar).length > 0) {
      setNombre(objetoEditar.nombre);
      setParticipantes(objetoEditar.participantes);
      setFecha(objetoEditar.fecha);
      setDescripcion(objetoEditar.descripcion);
    }
  }, [objetoEditar]); //Cada vez que cambie el objeto editar, si tiene algo, se actualizan los states de los campos del form

  useEffect(() => { //Cada vez que cambie el idioma, se actualizan los textos
    if (isSpanish) {
      setTextos(textosEspaniol);
      return;
    }
    setTextos(textosIngles);
  }, [isSpanish]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, participantes, fecha, descripcion].includes("")) {
      toast.error(textos[0]); //Si alguno de los campos está vacio, muestra un error
      return;
    }

    if (Object.keys(objetoEditar).length > 0) { // Si objetoEditar tiene algo, es porque estamos editando un evento, por lo que se mandan los datos con el método PUT
      if (
        objetoEditar.nombre === nombre &&
        objetoEditar.participantes === participantes &&
        objetoEditar.fecha === fecha &&
        objetoEditar.descripcion === descripcion
      ) { //Si los datos no han cambiado, muestra un error
        toast.error(textos[12]);
        return;
      }
      try {
        setCargando(true);
        const respuesta = await fetch(import.meta.env.VITE_BACKEND_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            participantes,
            fecha,
            descripcion,
            _id: objetoEditar._id,
          }),
        });
        const respuestaJson = await respuesta.json();
        if (respuestaJson.error) {
          toast.error(textos[11]); //Si el backend nos manda un error lo mostramos (nos puede mandar el error de que ya hauy un evento en esa fecha)
          return;
        }
        setEventos(
          eventos.map((evento) =>
            evento._id === objetoEditar._id ? respuestaJson : evento
          )
        ); //Si no hay error, actualizamos el state de los eventos cambiando los datos del que coincida con el id del evento que estamos editando
        toast.success(textos[13]);
        setNombre("");
        setParticipantes("");
        setFecha("");
        setDescripcion("");
        setObjetoEditar({}); //limpiamos states
      } catch (error) {
        console.log(error);
      }finally{
        setCargando(false);
      }
      return;
    }
    // si no se está editando se manda con el método POST
    try {
      setCargando(true);
      const respuesta = await fetch(import.meta.env.VITE_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, participantes, fecha, descripcion }),
      });
      const respuestaJson = await respuesta.json();
      if (respuestaJson.error) { //Si el backend nos manda un error lo mostramos
        toast.error(textos[11]);
        return;
      }
      setEventos([...eventos, respuestaJson]); //Si no hay error, actualizamos el state de los eventos agregando el nuevo evento
      toast.success(textos[1]);
      setNombre("");
      setParticipantes("");
      setFecha("");
      setDescripcion(""); //limpiamos states
    } catch (error) {
      console.log(error);
    }finally{
      setCargando(cargando);
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
    objetoEditar,
    cargando
  };
};

export default useFormulario;
