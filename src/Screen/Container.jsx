import React, { useEffect } from 'react'
import Counter  from '../Components/Counter'
import Wallet from '../Components/Wallet'
import SecondBtn from '../Components/SecondBtn'
import { useState } from 'react';
import GameHistory from './GameHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const durations = ["30", "60", "180"];
const numbers = Array.from({ length: 10 }, (_, i) => i);
const colors = ["Green", "Violet", "Red"];
const BigSmall = ["Big", "Small"];


const Container = () => {
const [myBalance,setMyBalance] = useState(10000)

  const [gameId, setGameId] = useState(10050);
  const [selectedDuration, setSelectedDuration] = useState(0 );
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBigSmall, setSelectedBigSmall] = useState(null);
 const [betType, setBetType] = useState(null);
const [betStatus, setBetStatus] = useState(false);
 const [placebetstatus,setPlacebetstatus] =  useState(false);
 const [betmultipler, setBetmultipler] = useState(null);
  const [betAmount, setBetAmount] = useState(null);
  const [history, setHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [countdown, setCountdown] = useState(0);
const [reamaing5s, setreamaing5s] = useState(false);
const [reamaing5sCount, setreamaing5sCount] = useState(0);

  const [reslut, setReslut] = useState(null); 


  const PlaceBet= (e)=>{
    setBetType(e)
    setPlacebetstatus(true);
  }

  
  const handleBetStatus = ()=>{
    if(betmultipler=== null &&  betAmount=== null) return alert("Please select bet multiplier and bet amount");  
    else if(betmultipler=== null) return alert("Please select bet multiplier");
    else if(betAmount=== null) return alert("Please select bet amount");
    else if (myBalance === 0  )  return alert("You have not amount to do Bet ")
      else if((betmultipler * betAmount) > myBalance)  return alert(`You have not sufficent amount to do Bet  , your balance ${myBalance}`)
    else{
      setBetStatus(true);
      setPlacebetstatus(false) 
      setSelectedBigSmall("") 
      setSelectedNumber("")   
      setSelectedColor('');
    
    }
    
    

  }



useEffect(()=>{
if (selectedDuration === 0) {
  setSelectedDuration('0')
}

 
  if (reamaing5s === true) {
    setreamaing5sCount(5)
  }else{
    setreamaing5sCount(0)
  }
},[reamaing5s])

useEffect(()=>{
  // console.log(reslut);
  
  let intervalId = setInterval(() => {
  
    if (reamaing5sCount === 0)  return setreamaing5sCount(0)
  //  console.log(reamaing5s);
   
    if(reamaing5sCount ===  1){
    
      setShowResult(true)
       setCountdown(parseInt(selectedDuration) )
       setreamaing5s(false)
       setPlacebetstatus(false)
    
    }
    setreamaing5sCount(reamaing5sCount - 1);
    
  }, 1000);
  

  return () => clearInterval(intervalId);
},[reamaing5sCount])




const evaluateBet = () => {
  // console.log(betType);
      const winColor = colors[Math.floor(Math.random() * colors.length)];
      const winNumber = numbers[Math.floor(Math.random() * numbers.length)];
      const winBigSmall = Math.random() > 0.5 ? "Big" : "Small";
      setGameId(gameId + 1);
      const result = { Id: gameId, number: winNumber, color: winColor, BigSmall: winBigSmall };
      setHistory([...history, result]);
if(betStatus === true){
      // Check if the selected bet matches the winning outcome
      if (betType === winColor ||  betType === winNumber || betType === winBigSmall) {
        // console.log("plus" , (betmultipler * betAmount));
        
          setMyBalance(  myBalance + (betmultipler * betAmount) );
          console.log(myBalance + (betmultipler * betAmount));
          // const winnings = originalBetAmount * 2; // Double the bet amount$${winnings}
          // alert(`Win! You selected the correct option! Your winnings: `);
          setReslut('win')
          console.log('win');
          // setInterval (() => {
          //   setReslut(null)
          //   setBetStatus(false)
          //   setBetmultipler(null)
          //   setBetAmount(null)
          // },2000)

         
      } else {
        // console.log("mius" , (betmultipler * betAmount));
        setMyBalance(myBalance - (betmultipler * betAmount));
          // alert("Loss!  You selected the wrong option.");
         
          
          setReslut('loss')
  //         setInterval (() => {
  // 
  //         },2000)

         
      }}

      // Reset showResult after processing
    
      setShowResult(false);
  };

  useEffect(() => {
    // console.log(showResult , history);
    
      if (showResult) {
          evaluateBet();
          setSelectedNumber('')
          setSelectedColor('')
          setSelectedBigSmall('')
          setBetType('')
  
      }
  }, [showResult]);






  return (
    <>
 { 
 reslut && 
  <div onClick={()=>{ setReslut(null)
   
    setBetStatus(false)
    setBetmultipler(null)
    setBetAmount(null)
  }} className='absolute top-0 left-50% z-50 w-[450px] bg-[#0000003d] h-screen flex justify-center items-center'> 
      <div className=' w-96 h-[40vh] rounded-xl flex  flex-col  justify-center items-center'> 
         <img
           className=' absolute z-[1000] top-[35%]'
            src={reslut === 'win' ?"src/assets/win.png" :"src/assets/loss .png"} 
            alt="" /><div className='w-32 h-48 mb-2 rounded-lg  absolute z-[100] bg-white'  >
            

         { reslut === 'win' ? (
            <h1 className='text-3xl font-bold mt-14 p-3 text-black flex gap-2'>
              <FontAwesomeIcon icon="fa-solid fa-face-smile-wink" className='text-yellow-500 bg-black rounded-full' />
              <FontAwesomeIcon icon="fa-solid fa-face-smile-wink" className='text-yellow-500 bg-black rounded-full' />
              <FontAwesomeIcon icon="fa-solid fa-face-smile-wink" className='text-yellow-500 bg-black rounded-full' />
              </h1>  ) : 
            (   <h1 className='text-3xl font-bold mt-14 p-3 text-black flex gap-2'>
               <FontAwesomeIcon icon="fa-solid fa-face-sad-tear"  className='text-yellow-500 bg-black rounded-full' />
              <FontAwesomeIcon icon="fa-solid fa-face-sad-tear" className='text-yellow-500 bg-black rounded-full' />
                <FontAwesomeIcon icon="fa-solid fa-face-sad-tear" className='text-yellow-500 bg-black rounded-full' />
                </h1>
               )}
              
                <hr />
               
           { reslut === 'win' ?
     <p className='font-bold  capitalize p-2 text-center'>
       You win your Bet Amount: {(betmultipler * betAmount)}
       </p>
                 : 
                 <p className='font-bold  capitalize p-2 text-center'>
                 You loss your Bet Amount:  ${(betmultipler * betAmount)}
                 </p>
                 }
                  


            </div>
         </div> 
 </div>}
    
      <Wallet  myBalance={myBalance}  setMyBalance={setMyBalance}/>
      <SecondBtn durations={durations} selectedDuration={selectedDuration}  setSelectedDuration={setSelectedDuration}   /> 

<Counter   gameId={gameId} selectedDuration={selectedDuration} setreamaing5s={setreamaing5s}  countdown={countdown} setCountdown={setCountdown}/>

{/*  */}
<div className='bg-[#00000036] p-2 m-2 relative rounded overflow-hidden'>

 { reamaing5sCount > 0 &&  <div className=' absolute w-full h-[100%] bg-[#000000ab] top-0 left-0  flex justify-center items-center text-white font-extrabold text-3xl'>{reamaing5sCount}</div>}
               <div className="mb-2 flex gap-2 justify-center items-center mx-auto w-11/12  ">
{colors.map ((color,index) => (
  <input 
  type='button' 
  key={color} 
  value={color} 
  onClick={() => {
    
    setSelectedColor(color)
    setSelectedNumber('')
    setSelectedBigSmall('');
    PlaceBet(color)
  }} 
  className={` p-2 px-7  font-bold rounded-full 
     ${selectedColor === color ?index ===  0 ? 'text-green-600 bg-red-100' : index === 1 ? ' text-violet-600 bg-red-100' : "text-red-600 bg-red-100"  : index ===  0 ? 'bg-green-600 text-white' : index === 1 ? ' bg-violet-600 text-white' : "bg-red-600 text-white"}
  
  
  `}
  />
))}

                </div>

                <div className="w-11/12 mx-auto  bg-[#29272750]  text-center rounded">
                    {numbers.map((number , index) => (
                        <input  
                            type='button' 
                            key={number} 
                            value={number} 
                            onClick={() => {setSelectedNumber(number)
                                setSelectedColor('');
                                setSelectedBigSmall('');
                                PlaceBet(number)
                            }} 

                            className={` p-3 px-5   text-xl font-bold rounded-full m-2  ${selectedNumber === number ? 'bg-red-600 text-white' : index % 2 === 0 ? "bg-slate-400" : "bg-slate-200"}`}
                        />
                       
                    ))}
                    </div>
                
                <div className="my-4 w-10/12 flex mx-auto justify-center items-center ">
                    {BigSmall.map((bigSmall , index) => (
                        <input 
                            type='button' 
                            key={bigSmall} 
                            value={bigSmall} 
                            onClick={() =>{
                              PlaceBet(bigSmall)
                              setSelectedBigSmall(bigSmall) 
                                setSelectedNumber("")   
                                setSelectedColor('');
                               
                            }} 
style={{borderRadius: index === 0 ? '20px  0 0 20px ' : '0 20px  20px 0'}}
                            className={` p-2 font-bold 
  ${selectedBigSmall === bigSmall ? 
     index === 0 ? "px-12 bg-red-600 text-white" : 'bg-red-600  px-7 text-white' 
     : index === 0 ? "px-12 bg-slate-400"  : "bg-slate-200  px-7"}`}
                    
                        />
                    ))}
                </div>
                </div>
{/*  */}
  
      
     { placebetstatus === true && <div className="container absolute bottom-0 bg-[#2d2d2d] px-2 p-1 w-[450px]  mx-auto mt-[50px] text-white">
   
             <div className="select-box bg-[#2e8b57] rounded-[5px] m-2  text-center p-2 ">
               <h1 className="header  rounded-t-[10px] "
               >
        Win Go {selectedDuration}s
     </h1>
     <p className=' bg-white mx-4 text-black my-1 rounded'>   Select <span>{betType}</span></p>
    </div>
    <hr />
    <div className="balance flex justify-between items-center mt-[10px] mb-[10px] ">
        <span className=' text-xl'>Balance</span>
       
        <div className=' border p-1'>
       {["1","10","100","1000"].map((balance)=>(
  <button
  onClick={()=> setBetAmount(balance) }
  className={` text-white ${ betAmount === balance ? "bg-green-800" : "bg-[#4b0082]" } mx-2 p-1 px-2  rounded-[5px]  `}  key={balance}>{balance}</button>
))}
          
        </div>
    </div>

    <hr />
    <div className="multiplier flex justify-between items-center m-3 mb-4 ">

{ [1, 5, 10, 20, 50, 100].map((multiplier, index) => (
  <button key={index} onClick={()=> setBetmultipler(multiplier) } 
   className={` ${betmultipler === multiplier ? "bg-green-800" : "bg-[#4b0082]" }   text-white border-none p-[5px] rounded-[5px] w-[50px] mx-[5px]`}>{`X${multiplier}`}</button>
))}
    </div>
     <hr />
    <div className="footer flex justify-between items-center m-2 mt-3 rounded overflow-hidden" >
        <button className="bg-[#4b0082] text-white border-none w-[40%] py-2"
        onClick={()=>{
          setPlacebetstatus(false) 
          setSelectedBigSmall("") 
          setSelectedNumber("")   
          setSelectedColor('');
          setBetmultipler(null)
          setBetAmount(null)
        } }
        >Cancel </button>
        <button
        onClick={()=>handleBetStatus() }
        
        className="total-amount bg-[#2e8b57] text-white border-none w-[60%] py-2  text-center">Total amount ₹{(betmultipler * betAmount) || 0}</button>
    </div>
     </div>
}
            <GameHistory history={history} />

      
</>
  )
}

export default Container
