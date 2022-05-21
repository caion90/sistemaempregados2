import './App.css';
import AdcEmpregado from './components/AdcEmpregado';
import ListaEmpregados from './components/ListaEmpregados';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AtualizarEmpregado from './components/AtualizarEmpregado';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/AtuEmpregado/:id" element={<AtualizarEmpregado />} />
          <Route path="/AdcEmpregado" element={<AdcEmpregado />} />
          <Route path="/" element={<ListaEmpregados />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
