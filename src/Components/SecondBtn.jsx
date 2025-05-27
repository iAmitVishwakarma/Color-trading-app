import React, { useState } from 'react'

const SecondBtn = ({durations  ,setSelectedDuration , selectedDuration}) => {
  // console.log(selectedDuration);
  const [timer,setTimer] =useState('')
  
  return (
  <>
  <div className=' border border-blue-500 h-[10vh] flex justify-evenly items-center m-2  rounded'>
        {durations.map((duration)=> 

            <button  key={duration} className={` font-semibold h-[100%] border-r w-full ${timer === duration || selectedDuration === duration ? " bg-green-500 font-bold border border-black " : ""} rounded-lg`}
            onClick={()=>{
              setTimer(duration || 30)
              setSelectedDuration(duration || 30)}}
            
            >
        <span className=' capitalize flex justify-center'>  win go</span>
        { duration === '30' && '30 sec' }
                { duration === '60' && '1 min' } 
                { duration === '180' && '3 min' }
            </button>
        
        )}
      
    

      </div>
  </>

  )
}

export default SecondBtn
