import React,{useState} from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

import Footer from './components/Footer.jsx'

const Layout = () => {
  const [dark,setDark]=useState(false)
  return (
    <>
      <div className={`min-h-screen ${dark ? 'bg-white text-black':"bg-black text-white"}`}>
      <Header  dark={dark} setDark={setDark}/>
      <Outlet context={{dark,setDark}}/>
      <Footer/>
      </div>
    </>
  )
}
export default Layout;