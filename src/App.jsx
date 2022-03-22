import Header from "./components/Header"
import FormData from "./components/FormData"
import ListPatients from "./components/ListPatients"

function App() {
  return (
    // Las clases solo aplican 1 estilo no como bootstrap, en este caso estamos aplicando un contenedor un padding auto de iquierda y derecha y un padding de arriba de 5rem.
    <div className="container mx-auto mt-20">
      <Header />
      <FormData />
      <ListPatients />
    </div>
  )
}

export default App
