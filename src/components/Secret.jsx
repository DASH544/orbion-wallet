import React, { useState } from "react";
import { WalletData } from "../context/WalletsContext";
const Secret = ({props}) => {
  const {mnemonic}=WalletData()
  const arr=mnemonic.split(" ")
  const [show,setShow]=useState(false)

  return (
    <>
      <div onClick={()=>{navigator.clipboard.writeText(mnemonic)}} className="max-w-6xl mx-auto border border-gray-500 mb-12 px-8 py-4 flex flex-col gap-6 rounded-md cursor-pointer">
        <div className="flex items-center justify-between  ">
          <h1 className="text-3xl font-bold">Your Secret Phrase</h1>
          <button className="hover:scale-110 cursor-pointer" onClick={()=>(setShow(prev=>!prev))}>{show ? (<svg width={20} fill="gray" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"></path> </g></svg>):(<svg width={20} fill="gray" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path> </g></svg>)}</button>
        </div>
        {
          show && 
          <div className="flex flex-col gap-4 ">
          <div className="grid grid-cols-4 gap-6 cursor-pointer">
             { arr.map((item,index)=>
              {
                return(
                <div key={index} className={`${props.dark ? "bg-slate-200" :"bg-stone-950"} p-4 rounded-md text-xl hover:opacity-70 `}>
                  <div>{item}</div>
                </div>
              )})}
          </div>
           <div className="" >
          <button className="flex gap-2 cursor-pointer hover:opacity-75"><svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="gray"></path> <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="gray"></path> </g></svg>Click anywhere to copy</button>
        </div>
        </div>
        //  <Secret props={{dark,setDark,mnemonic}}/>
        }
       
      </div>
    </>
  );
};

export default Secret;
