import React from 'react'
import '../styles/Form.css'
const Form = ({handleChange,handleClick,val}) => {
  return (
    <div className='form'>
    <div className='heading'>Add your tasks</div>
    <form action='' onSubmit={handleClick}>
      <input className='include' type='text' placeholder='Include your tasks' value={val} onChange={(e)=>handleChange(e.target.value)}/>
      <input className='submit' type='submit' value='Add' />
    </form>
  </div>
  )
}

export default Form
