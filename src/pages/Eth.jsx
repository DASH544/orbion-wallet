import React,{useState} from 'react'
import { generateMnemonic } from "bip39";
const Eth = () => {
  const [mnemonic, setMnemonic] = useState("");

  function genMnemonic() {
    const mne = generateMnemonic(128);
    setMnemonic(mne);
  }
  return (
    <>
      <button onClick={genMnemonic}>
        Generate Wallet
      </button>
      <p>{mnemonic}</p>
    </>
  );
};

export default Eth;
