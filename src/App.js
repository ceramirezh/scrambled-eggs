import ScrambleLogic from "./Components/ScrambleLogic";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import MemoryApp from "./Pages/MemoryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ScrambleLogic />} />
        <Route path="/memory" element={<MemoryApp />} />
      </Routes>

      {/* <ScramblePage /> */}
      {/* <ScrambleLogic /> */}
    </div>
  );
}

export default App;
