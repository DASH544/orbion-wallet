import React from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
const Home = () => {
  const { dark, setDark } = useOutletContext();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-bold">Orbit the blockchains with <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">Orbion</span></h1>
            <p className="text-2xl">Choose a blockchain to get started</p>
          </div>
          <div className="flex gap-5">
            <Link to="/phrase">
              <button className={` ${dark ? "bg-black text-white" :"bg-white text-black"} px-10 py-2 rounded-md cursor-pointer hover:opacity-75`}>Ethereum</button>
            </Link>
            <Link to="/phrase">
              <button className={` ${dark ? "bg-black text-white" :"bg-white text-black "} px-10 py-2 rounded-md cursor-pointer hover:opacity-75`}>Solana</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
