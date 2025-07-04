import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
     <div  className='max-w-7xl mx-auto'>
      <Link to="/eth"><button>Ethereum</button></Link>
      <Link to="/sol"><button>Solana</button></Link>
    </div> 
    </>
  )
}

export default Home
