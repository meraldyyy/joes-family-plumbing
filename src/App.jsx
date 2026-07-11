import { Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Emergency from "./pages/Emergency";

export default function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </>
  );
}