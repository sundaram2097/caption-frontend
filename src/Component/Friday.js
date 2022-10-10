import React,{useState} from 'react'
import SwitchColorButton from './SwitchColorButton'


function Friday() {
   
    const [color, setColor] = useState('')
    const colors = ['azure', 'ultramarine', 'lavender', 'red','applegreen']
  return <>
  <div className='day'>
    
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Friday</h1>
        <h4>Your today dress colors </h4>
        <h6>Enjoy your day</h6>
        {colors.map(currentColor => <SwitchColorButton color={currentColor} setColor={setColor} key={currentColor} />)}
      </div>
    </div> 
    </div>
  </>
}

export default Friday