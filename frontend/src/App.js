import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/Login" element={<Login />} />
            {/* <Produtos /> */}
            {/* <Sobre /> */}
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
