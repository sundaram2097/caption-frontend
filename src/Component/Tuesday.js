import React,{useState} from 'react'
import SwitchColorButton from './SwitchColorButton'


function Tuesday() {
    const [color, setColor] = useState('')
    const colors = ['naviblue', 'pink', 'gray', 'gold']
  return<>
  <div className='day'>
  <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Tuesday</h1>
        <h4>Your today dress colors </h4>
        <h6>Enjoy your day</h6>
        {colors.map(currentColor => <SwitchColorButton color={currentColor} setColor={setColor} key={currentColor} />)}
      </div>
    </div>
    </div>
  </>
}

export default Tuesday