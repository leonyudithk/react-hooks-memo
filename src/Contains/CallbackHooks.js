import React, { useCallback, useState } from 'react'
import CallbackIncrement from '../Components/CallbackIncrement';

const CallbackHooks = () => {
      const [counter, setCounter] = useState(7);

//Funcion que quiero pasar por el callaback
// const incrementar =(num)=>{
//     setCounter(counter + num)
// }

const incrementar = useCallback((num) => {
  setCounter(c => c + num);
}, [])

  return (
    <div>
      <h1>UseCallback: {counter} </h1>

      <CallbackIncrement increment={incrementar} />
    </div>
  );
}

export default CallbackHooks
