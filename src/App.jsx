import React from 'react'
import Heading from './Components/Heading'
import Timer from './Components/Timer'
import Counter from './Components/Counter'
import Container from './Screen/Container'


const App = () => {
  return ( 
  <div className='w-full h-screen flex justify-center items-center bg-slate-500 '>
<div className='w-[450px] h-screen bg-slate-50 rounded overflow-y-auto ' >
    <Heading></Heading>
    <Container />
{/*   
  <Counter /> */}
    </div>
    </div>
  )
}

export default App
