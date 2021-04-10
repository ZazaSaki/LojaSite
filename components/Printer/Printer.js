import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export default function Printer({ComponentToPrint}) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
          content: () => componentRef.current,
        });
      
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
          </div>
    );

}