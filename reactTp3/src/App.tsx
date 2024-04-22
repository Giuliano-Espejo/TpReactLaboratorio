import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instrumentos from "./components/Instrumentos/Instrumentos";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { DondeEstamos } from "./components/DondeEstamos/DondeEstamos";
import { InstrumentoItem } from "./components/Instrumentos/InstrumentoItem";
function App() {


  return (
    <div className="App" >
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dondeEstamos" element={<DondeEstamos/>}/>
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/instrumento/:id" element={<InstrumentoItem />} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
