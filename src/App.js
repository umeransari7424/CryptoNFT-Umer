import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Cronos from "./Components/Elements/Cronos";
import Cronos1 from "./Components/Elements/Cronos1";
import Cronos2 from "./Components/Elements/Cronos2";
import Cronos3 from "./Components/Elements/Cronos3";
import Cronos4 from "./Components/Elements/Cronos4";
import Cronos5 from "./Components/Elements/Cronos5";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/cronos" element={<Cronos />} />
            <Route index path="/cronos1" element={<Cronos1 />} />
            <Route index path="/cronos2" element={<Cronos2 />} />
            <Route index path="/cronos3" element={<Cronos3 />} />
            <Route index path="/cronos4" element={<Cronos4 />} />
            <Route index path="/cronos5" element={<Cronos5 />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
