import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import Layout from "./Layout";
import Home from "./pages/Home";
import Eth from "./pages/Eth";
import Sol from "./pages/Sol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/eth" element={<Eth />} />
          <Route path="/sol" element={<Sol />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
