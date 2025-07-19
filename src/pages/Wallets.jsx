import React, { useEffect, useState } from "react";
import Secret from "../components/Secret";
import Wal from "../components/Wal";
import { useOutletContext } from "react-router-dom";
import { ethWallet } from "../utils/ethWallet";
import { WalletData } from "../context/WalletsContext";
const Wallets = () => {
  const { dark, setDark } = useOutletContext();
  const { mnemonic, currIndex ,setCurrIndex} = WalletData();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const walfn = async () => {
      const WalletObj = await ethWallet(mnemonic, currIndex);
      setArr([...arr, WalletObj]);
      setCurrIndex(currIndex+1)
      
    };
    walfn();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <Secret props={{ dark }} />
        <div className="flex items-center justify-between mb-12 ">
          <h1 className="text-4xl font-bold">Ethereum Wallet </h1>
          <div className="flex gap-4 ">
            <button
              onClick={async () => {
                const WalletObj = await ethWallet(mnemonic, currIndex);
                setArr([...arr, WalletObj]);
                setCurrIndex(currIndex=>currIndex+1)
              }}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                dark ? "bg-black text-white" : "bg-white text-black "
              }`}
            >
              Add Wallet
            </button>
            <button className=" cursor-pointer px-4 py-2 rounden-md bg-red-600 text-white">
              Clear Wallet
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-6 rounded-md">
      {

      arr.map((item, index) => {
        return <Wal key={index} wallet={item} index={index} />;
      })}
      </div>
    </>
  );
};

export default Wallets;
