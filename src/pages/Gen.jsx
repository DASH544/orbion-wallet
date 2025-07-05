import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import { Link, useOutletContext } from "react-router-dom";
import Wallet from "../components/Wallet";
import Secret from "../components/Secret";
const Gen = () => {
  const { dark, setDark } = useOutletContext();
  const [mnemonic, setMnemonic] = useState("");
  function genMnemonic() {
    const mne = generateMnemonic(128);
    setMnemonic(mne);
    localStorage.setItem("phrase",mne)
  }
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl mb-4 font-bold">Secret Recovery Phrase</h1>
          <h3 className="text-2xl font-semibold">
            Save these words in a safe place.
          </h3>
        </div>
        <div className="flex justify-between items-center gap-6 mt-4">
          <input
            className="flex-1 px-2 py-2 border-solid border border-gray-500 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="Enter your seed phrase or(leave blank create a new one)"
          />
          <Link to="/wallets"><button
            className={`${
              dark ? "bg-black text-white" : "bg-white text-black"
            } px-10 py-2 rounded-md cursor-pointer hover:opacity-75`}
            onClick={genMnemonic}
          >
            Generate Wallet
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default Gen;
