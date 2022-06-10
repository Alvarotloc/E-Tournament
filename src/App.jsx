import Calendar from "./components/Calendar"
import Header from "./components/Header"

const App = () => {
  return (
    <main>
      <Header />
      <div className="contenedor-general">
        <Calendar />
      </div>
    </main>
  )
}

export default App