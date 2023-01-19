import React from 'react'
import '../components/Container.css'
import Inputs from '../components/Inputs'

const Container = () => {
    
  return (
    <div className='container'>

        <h1>Temperature Converter</h1>
        <Inputs/>
    </div>
  )
}

export default Container