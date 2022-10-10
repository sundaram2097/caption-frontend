import React,{useState} from 'react'
import SwitchColorButton from './SwitchColorButton'


function Saturday() {
   
    const [color, setColor] = useState('')
    const colors = ['red','azure', 'navy', 'wheat', 'teal']
  return <>
  <div className='day'>
    
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Saturday</h1>
        <h4>Your today dress colors </h4>
        <h6>Enjoy your day</h6>
        {colors.map(currentColor => <SwitchColorButton color={currentColor} setColor={setColor} key={currentColor} />)}
      </div>
    </div> 
    </div>
  </>
}

export default Saturday