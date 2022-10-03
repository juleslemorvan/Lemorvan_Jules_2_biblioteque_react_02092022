import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
