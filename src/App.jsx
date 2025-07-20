import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import Layout from "./Layout";
import Home from "./pages/Home";
import GenerateWallet from "./pages/GenrateWallet";
import Wallets from "./pages/Wallets";



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/phrase" element={<GenerateWallet />} />
          <Route path="/wallets" element={<Wallets />} />
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
