import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
