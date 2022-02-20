import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
}
