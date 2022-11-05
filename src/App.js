import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Marketplace from "./Pages/Marketplace";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
