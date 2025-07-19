import React from "react";
import { WalletData } from "../context/WalletsContext";
const WalletTest = () => {
  const { mnemonic, genMnemonic } = WalletData();
  return (
    <>
      <div>
        <button onClick={genMnemonic}>Generate Mnemonic</button>
        <p>{mnemonic}</p>
      </div>
    </>
  );
};

export default WalletTest;
