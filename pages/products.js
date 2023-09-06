import TypeItemPage from "../components/TypeItemPage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from "react";
import TopBar from "../components/TopBar";
import {cardEnvelop} from "../styles/extra.module.css";
import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import { Button, NavLink } from "react-bootstrap";


const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";


//Getting pre cooked info from server
export async function getStaticProps(){
  //requesting to api  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
      
    //handling errors
      try {
        const data = await res.json();
        return{
          props : {data: data}
        }
      } catch (error) {
        const data = [];
        
        //sending answer to client
        return{
          props : {data: data}
        }
      }
}


//building page
export default function products({data}){
    const CardList = data;
    const [type, setType] = useState('');

    function bt(){
      if (type!='') {
        return <Button>
          <NavLink href="/">
            Voltar
          </NavLink>
        </Button>
      }
    }

    function decide(){
        if (type!='') {
            return(
                <div className = {cardEnvelop}> 
                    <CardGroup className='container' List = {DysplayList} Card = {Card_2}></CardGroup>
                </div>
            );
        }

        return <TypeItemPage CardList={CardList} action={setType}></TypeItemPage>;
    }

    console.log(CardList[0]);

    return(<div>
            <TopBar></TopBar>
            {bt()}
            {decide()}
            
        </div>);
}