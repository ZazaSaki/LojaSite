import EditorApp from "../components/EditorApp/EditorApp";
import React, {useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import readProducts from "../src/DataUtils";

export async function getStaticProps(){
  return {
    props : { data: readProducts() }
  };
}

export default function Editor({data}){
    const [CardList, setCardList] = useState([]);
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({ contentRef: componentRef });

  return (
    <div>
      <button onClick={() => handlePrint()}>Print this out!</button>
      <div ref={componentRef}>
        <EditorApp data={data} CardList={CardList} setCardList={setCardList} />
      </div>
    </div>);
}
