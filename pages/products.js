import TypeItemPage from "../components/TypeItemPage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from "react";
import TopBar from "../components/TopBar";
import {cardEnvelop} from "../styles/extra.module.css";
import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import { Button } from "react-bootstrap";


const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";

/*const CardList = [
    {title : "Classe de Produto 1",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Produto 2",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Produto 3",src : "/250x300.svg",  text : trashtext}
]*/

//const card = CardList[0];

//<CardGroup List = {CardList}></CardGroup>

export async function getStaticProps(){
    const res = await fetch('http://simplepure.vercel.app/api/hello');
      try {
        const data = await res.json();
        return{
          props : {data: data}
        }
      } catch (error) {
        const data = [];
        return{
          props : {data: data}
        }
      }
}

export default function products({data}){
    const CardList = data;
    const [type, setType] = useState('');
    console.log(CardList);

    function bt(){
      if (type!='') {
        return <Button onClick = {()=>{setType('')}}>Voltar</Button>
      }
    }

    function decide(){
        if (type!='') {
            return(
                <div className = {cardEnvelop}> 
                    <CardGroup className='container' List = {CardList.filter((card)=>(card.family==type))} Card = {Card_2}></CardGroup>
                </div>
            );
        }

        return <TypeItemPage CardList={CardList} action={setType}></TypeItemPage>;
    }

    

    return(<div>
            <TopBar></TopBar>
            {bt()}
            {decide()}
            
        </div>);
}