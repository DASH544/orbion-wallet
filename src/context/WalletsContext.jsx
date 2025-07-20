import React, { createContext, useState,useRef } from 'react'
import {generateMnemonic} from "bip39"
export const WalletsContext=createContext()
export const WalletsContextProvider= ({children}) => {
    const [walletType,setWalletType]=useState(null)
    const [theme,setTheme]=useState(null)

 
  return (
    <WalletsContext.Provider value={{walletType,setWalletType}}>
      {children}
    </WalletsContext.Provider>
  )
}

export default WalletsContext
