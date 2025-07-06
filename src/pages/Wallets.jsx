import React, { useState } from 'react'
import Secret from '../components/Secret'
import Wal from '../components/Wal'
import { useOutletContext } from 'react-router-dom'
import { ethWallet } from '../utils/ethWallet'
const Wallets = () => {
    const { dark, setDark } = useOutletContext();
    const WalletData=(localStorage.getItem("phrase"))
  
      const arr =  JSON.parse(localStorage.getItem("Wallet"));

  return (
    <>
        <div className='max-w-6xl mx-auto '>
     <Secret props={{dark}}/>
     <div className='flex items-center justify-between mb-12 '>
        <h1 className='text-4xl font-bold'>Ethereum Wallet </h1>
        <div className='flex gap-4 '>
            <button onClick={()=>ethWallet(WalletData,arr.length)} className={`cursor-pointer px-4 py-2 rounded-md ${dark ? "bg-black text-white":"bg-white text-black "}`}>Add Wallet</button>
            <button className=' cursor-pointer px-4 py-2 rounden-md bg-red-600 text-white'>Clear Wallet</button>
        </div>
     </div>
     </div>
 {
  arr.map((item,index)=>
    {
      console.log(item)
      console.log(item[0],"hfds")
      return(
      <Wal key={index} wallet={item} index={index} />
    

      )
    }) 
 }

    </>
  )
}

export default Wallets
