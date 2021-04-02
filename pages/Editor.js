
import 'bootstrap/dist/css/bootstrap.min.css';  
import Etiqueta from '../components/Etiqueta';
import TopBar from '../components/TopBar';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Card from '../components/Card_1';
import { useState } from "react";

//get data from server
export async function getStaticProps(){
    const res = await fetch('https://simplepure.vercel.app/api/hello');
    const data = await res.json();

    return{
        props : {data: data}
    }
}

let CardList = [];

function newCard(){
    if (CardList.length > 0) {
        const id = CardList[CardList.length-1].id
    }
    
    CardList.push({id, list:[]});
}

function newProduct(id, product){
    CardList.list.push(product);
}

function deleteCard(id){
    CardList = CardList.filter((e)=>(e.id!=id));
}





export default function products({data}){
    
    const [search, setSearch] = useState("");
    const [cardId, setCardId] = useState("");

    function getList(){
        if (!data || !data[0]) {
            return [1,2,3];
        }

        return data;
    }

    const list = getList().slice(0,3);
    console.log(data);
    return(<div>
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>Procurar {search}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" onChange= {(e)=>setSearch(e.target.value)}/>
        <InputGroup.Prepend>
        <Button variant="outline-secondary">Nova Etiqueta</Button>
        <Button variant="outline-secondary">Apagar Etiqueta</Button>
        </InputGroup.Prepend>
        </InputGroup>
            <Button><Etiqueta List={list}></Etiqueta></Button>
            
        </div>);
}