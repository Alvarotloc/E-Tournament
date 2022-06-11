const Formulario = () => {
  return (
    <form>
        <fieldset>
            <legend>Agregar Evento</legend>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" placeholder="Ingrese el nombre del evento" name="nombre" id="nombre" />
            </div>
            <div>
                <label htmlFor="participantes">Participantes</label>
                <input type="number" placeholder="Ingrese el numero de participantes del evento" name="participantes" id="participantes" />
            </div>
            <div>
                <label htmlFor="fecha">Fecha</label>
                <input type="date" placeholder="Ingrese la fecha del evento" name="fecha" id="fecha" />
            </div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" placeholder="Ingrese descripción del evento"/>
            </div>
        </fieldset>
    </form>
  )
}

export default Formulario