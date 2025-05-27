import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wallet = ({myBalance , setMyBalance}) => {
  return (
    <div  className="wallet flex m-2 rounded-md bg-blue-300 p-3">
<div className='w-6/12 flex flex-col justify-center items-center'>
   <div className='flex gap-1 font-bold'> <h1>₹<span>{myBalance}</span></h1> </div> 
 <p className=' capitalize font-semibold'><span> <FontAwesomeIcon icon="fa-solid fa-wallet" className="mr-2" /></span>wallet balance</p>
   </div>
   <div className='w-6/12 flex gap-2 justify-center items-center'>
  <button 
 onClick={()=>{ if (myBalance === 0) return
  else setMyBalance(myBalance - 10)}  }
  type="button" className=' capitalize bg-red-700 rounded-full p-1 px-4 font-semibold text-white'>withdraw</button>
  <button  onClick={()=>setMyBalance(myBalance + 10)  } type="button" className=' capitalize bg-green-700 rounded-full p-1 px-4 font-semibold text-white'   >deposite</button>
   </div>
    </div>
  )
}

export default Wallet
