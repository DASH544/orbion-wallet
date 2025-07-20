import React, { useContext, useEffect, useState } from "react";
import SecretSeed from "../components/SecretSeed";
import WalletsContext from "../context/WalletsContext";
import { useOutletContext } from "react-router-dom";
import { GenEthWallet } from "../utils/GenEthWallet";
import { GenSolWallet } from "../utils/GenSolWallet";
import { useNavigate } from "react-router-dom";
import Wal from "../components/Wal"
const Wallet = () => {
  const seed = localStorage.getItem("mnemonic");
   const { dark, setDark } = useOutletContext();
  const { walletType, setWalletType } = useContext(WalletsContext);
  const [index, setIndex] = useState(0);
  const [wallet, setWallet] = useState([]);
    const navigate = useNavigate(); 
  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      setWallet([JSON.parse(storedWallet)]);
    } else {
      const fetchWallet = async () => {
        let walletData;
        if (walletType === "Eth") {
          walletData = await GenEthWallet(seed, 0);
        } else if (walletType === "Sol") {
          walletData = await GenSolWallet(seed, 0);
        }
        if (walletData) {
          setWallet([walletData]);
          setIndex((prev) => prev + 1);
          localStorage.setItem("wallet", JSON.stringify(walletData, null, 2));
          console.log(walletData)
        }
      };
      fetchWallet();
    }
  }, []);
const handleAddWallet = async () => {
  let WalletObj;
  if (walletType === "Eth") {
    WalletObj = await GenEthWallet(seed, index);
  } else if (walletType === "Sol") {
    WalletObj = await GenSolWallet(seed, index);
  }
  setWallet((prev) => [...prev, WalletObj]);
  setIndex((prev) => prev + 1);
  localStorage.setItem("wallet", JSON.stringify(WalletObj, null, 2));
};

  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <SecretSeed props={{ dark }} />
        <div className="flex items-center justify-between mb-12 ">
          <h1 className="text-4xl font-bold">Ethereum Wallet </h1>
          <div className="flex gap-4 ">
            <button
              onClick={handleAddWallet}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                dark ? "bg-black text-white" : "bg-white text-black "
              }`}
            >
              Add Wallet
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className=" cursor-pointer px-4 py-2 rounden-md bg-red-600 text-white"
            >
              Clear Wallets
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-6 rounded-md">
        {wallet.map((item, index) => {
          console.log("Hello")
          return <Wal key={index} wallet={item} index={index} />;
        })}
      </div>
    </>
  );
};

export default Wallet;
