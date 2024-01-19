import React from 'react'
import { Button } from 'react-bootstrap';

const Hijo = ({incrementar, n}) => {
   console.log("Me rendenrizan desde Hijo :( ");
   return (
     <div>
       <Button
         variant="danger"
         onClick={() => {
           incrementar(n);
         }}
       >
         Incrementar:  {n}
       </Button>
     </div>
   );
}

export default Hijo
