import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  )
}

export default App;