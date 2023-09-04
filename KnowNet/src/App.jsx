import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
