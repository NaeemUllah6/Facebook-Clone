import React, { useState } from 'react'

function Counter() {
    let [counter ,setCounter] = useState(0)
    let [disable , setDisabled] = useState(false)
    const counterUp = ()=>{
        setCounter( counter + 5)
    }
    const counterDown = () => {
       setCounter( counter - 5)
    }
   let chekciflessthenone = () =>{
        if(counter <=0 ){
        setDisabled(true)
        }
        else{
            setDisabled(false)
        }
   }
   
   React.useEffect(() => {
    chekciflessthenone();
   }, [counter])
   
  return (
    <div className={`flex gap-3 flex-col `}>
      <h1 className='text-2xl font-[600]'>Counter using hooks</h1>
      <h2 className='text-xl font-[500]'>Your counter value is {counter}</h2>
     <div className='flex gap-3 items-center mt-3'>
     <button onClick={counterUp} className='bg-orange-500 px-3 py-2 rounded-lg text-white font-[500]'>Add Value <i className='fa fa-chevron-up'></i></button>
     <button onClick={counterDown} disabled={disable} className={`bg-orange-600 px-3 py-2 rounded-lg text-white font-[500]`}>Remove Value <i className='fa fa-chevron-down'></i></button>
     </div>
     <p className='pt-5 text-red-700'>Your UPDATED value is {counter}</p>
     <p>{chekciflessthenone}</p>
    
    </div>
  )
}

export default Counter
