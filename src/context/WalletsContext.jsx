import React, { createContext, useContext, useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { ethWallet } from "../utils/ethWallet";
const WalletContext = createContext();
export const WalletContextProvider = ({ children }) => {
  const [mnemonic, setMnemonic] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  function genMnemonic() {
    // const wall = localStorage.getItem("Wallet");
    // if (!wall || wall.length == 0) {
      const newMnemonic = generateMnemonic(128);
      setMnemonic(newMnemonic);
      // ethWallet(newMnemonic, currIndex);
      // setCurrIndex(currIndex + 1);
      console.log(currIndex)
    
  }
  return (
    <>
      <WalletContext.Provider value={{ mnemonic, genMnemonic, currIndex,setCurrIndex }}>
        {children}
      </WalletContext.Provider>
    </>
  );
};

export const WalletData = () => {
  const context = useContext(WalletContext);
  console.log("WalletContext value:", context); // Should show the object
  if (!context) {
    throw new Error(
      "WalletContext is undefined. Are you missing the provider?"
    );
  }
  return context;
};
