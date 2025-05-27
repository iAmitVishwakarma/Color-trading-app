import React, { useEffect, useState } from 'react'

const Counter = ({ selectedDuration ,setreamaing5s ,countdown, setCountdown , gameId  }) => {
 


  useEffect(() => {
    if(selectedDuration === 0 ) return
   else {setCountdown(parseInt(selectedDuration))
  
    
    setreamaing5s(false);
  }
  }, [selectedDuration])

  useEffect(()=>{
  let intervalId = setInterval(() => {
            if (countdown > 0) {
              setCountdown(countdown - 1);
            }
            if (countdown < 7) {
              if(selectedDuration == 0 ) returnq 
                else{setreamaing5s(true)}
              
            }
          }, 1000);
        
    
        return () => clearInterval(intervalId);
  },[countdown])


  return (
    <div id='Counter' className=' bg-orange-300  relative m-2 flex h-[15vh] rounded'>
      <span className="border-dashed border-black border-[1px] relative left-[26%] my-[7px]" ></span>

      <div className=' absolute right-0 p-2 w-8/12  text-center'>
        <h1 className=' uppercase font-semibold text-black '>time remaing</h1>
        <p className='border mx-20 text-white font-semibold mt-1'>
        <span className='  bg-slate-700  mr-1 p-1'>{(Math.floor(countdown / 60).toString().padStart(2, '0').split('')[0]) 
} </span>
        <span className='  bg-slate-700  mr-1 p-1'>{(Math.floor(countdown / 60).toString().padStart(2, '0').split('')[1])}</span>
<span className=' bg-slate-700 p-1 mr-1'>:</span>
<span className=' bg-slate-700 p-1  mr-1'>{(countdown % 60).toString().padStart(2, '0').split('')[0]}</span>
<span className=' bg-slate-700 p-1 '>{(countdown % 60).toString().padStart(2, '0').split('')[1]}</span>
        </p>

        <div className=' mt-1 text-black font-bold' >
          <h1 id='ID'>{gameId}</h1>
        </div>
      </div>
    </div>
  )
}

export default Counter
