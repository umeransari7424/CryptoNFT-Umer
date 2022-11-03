import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Cronos from "./Components/Elements/Cronos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/cronos" element={<Cronos />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
