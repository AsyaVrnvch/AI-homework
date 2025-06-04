import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/task-1" element={<Pricing />} />
        <Route path="/task-3" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
