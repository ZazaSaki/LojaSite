
import 'bootstrap/dist/css/bootstrap.min.css';  
import EditorApp from "../components/EditorApp/EditorApp";
import React, {useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import CardListComp from '../components/CardList/CardList';



export async function getStaticProps(){
    const res = await fetch('https://simplepure.vercel.app/api/hello');
    const data = await res.json();

    return{
        props : {data: data}
    }
}

export default function products({data}){
    
    const [CardList, setCardList] = useState([]);
    const componentRef = useRef();

    

    function print(){
        return <CardListComp CardList={CardList} setCardId={()=>(0)}></CardListComp> ;
    }
  return (
    <div>
      <ReactToPrint
        trigger={() => (<button>Print this out!</button>)}
        content={() => componentRef.current}
      />
        <EditorApp data={data} CardList={CardList} setCardList={setCardList} ref={componentRef} />
      </div>);
}