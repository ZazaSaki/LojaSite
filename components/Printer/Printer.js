import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Printer({ComponentToPrint}) {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({ contentRef: componentRef });

    return (
        <div>
            <div ref={componentRef}>
                <ComponentToPrint />
            </div>
            <button onClick={() => handlePrint()}>Print this out!</button>
        </div>
    );
}
