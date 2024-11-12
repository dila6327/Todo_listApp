import React from 'react'
import '../styles/Added.css'
const Added = ({orders,deleteOrder}) => {
  return (
    <div className='added_tasks'>
{orders.map((order,index)=>(<div className='elem' key={order}>{index+1}.{order} <button id={index} onClick={(e)=>deleteOrder(e.target.id)}>del</button></div>) )}
</div>
  )
}

export default Added
