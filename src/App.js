import './App.css';
import NavScrollExample from "./componentes/navBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import SobreMi from './componentes/SobreMi';
import Experiencia from './componentes/Experiencia';
import Educacion from './componentes/Educacion';
import Contacto from './componentes/Contacto';

function App() {
  return (
      <Router>
          <NavScrollExample />
          <main className="container mt-4">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre-mi" element={<SobreMi />} />
                  <Route path="/experiencia" element={<Experiencia />} />
                  <Route path="/educacion" element={<Educacion />} />
                  <Route path="/contacto" element={<Contacto />} />
              </Routes>
          </main>
      </Router>
  );

}

export default App;
