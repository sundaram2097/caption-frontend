import React,{useState} from 'react'
import SwitchColorButton from './SwitchColorButton'


function Sunday() {
   
    const [color, setColor] = useState('')
    const colors = ['salmon', 'blue', 'gold', 'maroon']
  return <>
  <div className='day'>
    
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Sunday</h1>
        <h4>Your today dress colors </h4>
        <h6>Enjoy your day</h6>
        {colors.map(currentColor => <SwitchColorButton color={currentColor} setColor={setColor} key={currentColor} />)}
      </div>
    </div> 
    </div>
  </>
}

export default Sunday