import React from "react";
import { WalletContextProvider } from "../context/WalletsContext.jsx";
import WalletTest from "./WalletTest.jsx";

const SeedPage = () => {
  return (
    <WalletContextProvider>
      <WalletTest />
    </WalletContextProvider>
  );
};

export default SeedPage;
