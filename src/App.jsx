import Home from "./Home"
import Philosophy from "./Philosophy"
import Reflective from "./Reflective"
import Picture from "./Media"
import Curriculum from "./Curriculum"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/philosophy" element={<Philosophy/>}></Route>
        <Route path="/Reflective" element={<Reflective/>}></Route>
        <Route path="/media" element={<Picture/>}></Route>
        <Route path="/cv" element={<Curriculum/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
