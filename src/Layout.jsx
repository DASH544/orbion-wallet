import React, { useState } from "react";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { WalletsContextProvider } from "./context/WalletsContext.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div
        className={`min-h-screen ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <Header dark={dark} setDark={setDark} />
        <WalletsContextProvider>
          <Outlet context={{ dark, setDark }} />
        </WalletsContextProvider>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
