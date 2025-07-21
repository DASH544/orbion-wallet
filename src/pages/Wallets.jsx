import React, { useContext, useEffect, useState } from "react";
import SecretSeed from "../components/SecretSeed";
import WalletsContext from "../context/WalletsContext";
import { useOutletContext } from "react-router-dom";
import { GenEthWallet } from "../utils/GenEthWallet";
import { GenSolWallet } from "../utils/GenSolWallet";
import { useNavigate } from "react-router-dom";
import Wal from "../components/Wal";
const Wallets = () => {
  const { dark, setDark } = useOutletContext();
  const { walletType } = useContext(WalletsContext);
  const [index, setIndex] = useState(0);
  const [wallet, setWallet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      setWallet(JSON.parse(storedWallet));
    }
    // } else {
    //   const fetchWallet = async () => {
    //     let walletData;
    //     if (walletType === "Eth") {
    //       walletData = await GenEthWallet(seed, 0);
    //     } else if (walletType === "Sol") {
    //       walletData = await GenSolWallet(seed, 0);
    //     }
    //     if (walletData) {
    //       setWallet([walletData]);
    //       setIndex((prev) => prev + 1);
    //       localStorage.setItem("wallet", JSON.stringify([walletData]));
    //       console.log(walletData)
    //     }
    //   };
    //   fetchWallet();
    // }
  }, []);
  const handleAddWallet = async () => {
    const seed = localStorage.getItem("mnemonic");
    const existingWallet = JSON.parse(localStorage.getItem("wallet"));
    let WalletObj;
    const walletType=localStorage.getItem('walletType')
    if (walletType == "Eth") {
      WalletObj = await GenEthWallet(seed, index);
      console.log("Eth ")
    } else if (walletType == "Sol") {
       console.log("Sol ")
      WalletObj = await GenSolWallet(seed, index);
    }

    if (WalletObj && WalletObj.publicKey) {
      const updatedWallets = [...wallet, WalletObj];
      setWallet(updatedWallets);
      setIndex((prev) => prev + 1);

      localStorage.setItem("wallet", JSON.stringify(updatedWallets));
    } else {
      console.error(
        "Wallet generation failed. The new wallet object is invalid."
      );
    }
  };
  const handleDeleteWallet = (key) => {
    const updatedWallets = wallet.filter((item) => item.publicKey !== key);
    setWallet(updatedWallets);
    localStorage.setItem("wallet", JSON.stringify(updatedWallets));
    if (updatedWallets.length == 0) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <SecretSeed props={{ dark }} />
        <div className="flex items-center justify-between mb-12 ">
          <div className="text-4xl font-bold">
            {walletType == "Eth" ? (
              <h1>Ethereum Wallet</h1>
            ) : (
              <h1>Solana Wallet</h1>
            )}
          </div>
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
                localStorage.removeItem("wallet");
                localStorage.removeItem("mnemonic");
                localStorage.removeItem("walletType")
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
          console.log("Hello");
          return (
            <Wal
              key={index}
              wallet={item}
              index={index}
              onDelete={() => handleDeleteWallet(item.publicKey)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Wallets;
