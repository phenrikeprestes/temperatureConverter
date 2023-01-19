import React,{useState} from 'react'
import '../components/Inputs.css'

const Inputs = () => {

  const[celsius,setCelsius] = useState(0)
  const[fahrenheit,setFahrenheit] = useState(0)

  return (
    <div className='input'>
        <label htmlFor="" className='celsius'>Celsius to Fahreheiit</label>
        <br />
        <br />
        <input type="text" onChange={c => setCelsius(c.target.value*9/5+32)} />
        <p className='rescelsius'>{celsius} F°</p>
        <label htmlFor="" className='fahrenheit'>Fahrenheit to Celsius</label>
        <br />
        <br />
        <input type="text" onChange={f => setFahrenheit((f.target.value -32)*5/9)} />
        <p className='resfahrenheit'>{fahrenheit} C°</p>

        
    </div>
  )
}

export default Inputs