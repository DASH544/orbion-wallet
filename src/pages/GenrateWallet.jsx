import React, { useRef, useState } from "react";
import { generateMnemonic } from "bip39";
import { Link, useOutletContext } from "react-router-dom";

const GenerateWallet = () => {
  const { dark, setDark } = useOutletContext();
  const [seed, setSeed] = useState("");
  const inputBox = useRef(null);
  function generateSeed() {
    if (inputBox.current.value == "") {
      const seedPhrase = localStorage.getItem("mnemonic");
      if (!seedPhrase) {
        const seedVal = generateMnemonic(128);
        setSeed(seedVal);
        localStorage.setItem("mnemonic", seedVal);
        console.log("Seed saved in local storage 1st time");
      } else {
        setSeed(seedPhrase);
      }
    } else {
      setSeed(inputBox.current.value);
      localStorage.setItem("mnemonic", inputBox.current.value);
      console.log(seed);
    }
  }
  // const [mnemonic, setMnemonic] = useState("");
  // const [currIndex, setCurrIndex] = useState(1);
  // function genMnemonic() {
  //   const wall=localStorage.getItem("Wallet")
  //   if(!wall||wall.length==0){
  //   const mne = generateMnemonic(128);
  //   setMnemonic(mne);
  //   localStorage.setItem("phrase",mne)
  //  ethWallet(mne,currIndex)
  //   setCurrIndex(currIndex+1)
  // }
  // }

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
            ref={inputBox}
            className="flex-1 px-2 py-2 border-solid border border-gray-500 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="Enter your seed phrase or (leave blank create a new one)"
          />
          <Link to="/wallets">
            <button
              className={`${
                dark ? "bg-black text-white" : "bg-white text-black"
              } px-10 py-2 rounded-md cursor-pointer hover:opacity-75`}
              onClick={generateSeed}
            >
              Generate Wallet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GenerateWallet;
