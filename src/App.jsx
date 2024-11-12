import { useState } from 'react'
import './index.css'
import Form from './assets/components/Form'
import Added from './assets/components/Added'
function App() {
  const [val, setVal] = useState('')
  const [orders,setOrders]=useState([]);
const handleChange=(val)=>{
  if(val.length<=50){
setVal(val);}
else{
  alert('Can not be added more than 50 chars')
}
}

const handleClick=(event)=>{
  event.preventDefault();
  if(![...orders].includes(val) && val.trim().length!=0){
setOrders([...orders,val]);

setVal('')
 }
 else if(val.trim().length==0){
  alert('Can not be added empty string');
 }

 else{
  alert('You already added this task');
 }
}

const deleteOrder=(index_1)=>{
setOrders( orders.filter((order,index)=>index_1!=index))

}


  return (
  <div className='parent'>
<Form handleChange={handleChange} handleClick={handleClick} val={val}/>
<Added deleteOrder={deleteOrder} orders={orders}/>
  </div>
  )
}

export default App