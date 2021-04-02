
import 'bootstrap/dist/css/bootstrap.min.css';  
import {search as searchClass} from "../styles/etiqueta.module.css";
import { useState } from "react";

import { Button, FormControl, InputGroup, Overlay } from "react-bootstrap";
import Etiqueta from '../components/Editor/Etiqueta';
import SearchList from '../components/SearchList/SearchList';


//get data from server
export async function getStaticProps(){
    const res = await fetch('https://simplepure.vercel.app/api/hello');
    const data = await res.json();

    return{
        props : {data: data}
    }
}







export default function products({data}){
    
    const [test, setTest] = useState(0);
    
    const [search, setSearch] = useState("");
    const [cardId, setCardId] = useState(0);

    //setting up Cardlist logic
    const [CardList, setCardList] = useState([]);;

    function newCard(){
        setCardList([...CardList,{list:[]}]);
    }

    function deleteCard(){
        deleteAnyCard(cardId);
    }

    function deleteAnyCard(id){
        const l1 = CardList.slice(0,id);
        const l2 = CardList.slice(id + 1, CardList.length);
        
        setCardList([...l1, ...l2]);
    }

    function newProduct(product){
        if (!CardList[cardId]) {
            return;
        }
        CardList[cardId].list.push(product);

        update();
    }
    function popProduct() {
        if (!CardList[cardId]) {
            return;
        }
        CardList[cardId].list.pop();
        update();
    }

    function update(){
        newCard();
        deleteAnyCard(CardList.length);
    }

    function showCardList(){
        let i = 0;
        const t = CardList.map((card)=>{
            const index = i++;
           return (<Button onClick={()=>{setCardId(index);}} key={i} ><Etiqueta List={card.list}></Etiqueta></Button>);
        });

        return t;
    }

    function searchList(){
        const list = data.filter((product)=>(product.name.toLowerCase().includes(search.trim().toLowerCase())));
        return(<SearchList list={list} action={newProduct} active={search.length>0}></SearchList>);
    }



    //cleaning data
    function getList(){
        //validating data
        if (!data || !data[0]) {
            return [1,2,3];
        }

        return data;
    }

    const list = getList().slice(0,3);
    //console.log(data);
    return(<div>
        <div>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Procurar</InputGroup.Text>
                </InputGroup.Prepend>
                
                <FormControl aria-describedby="basic-addon1" onChange= {(e)=>setSearch(e.target.value)}/>
                
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={()=>{newCard()}}>Nova Etiqueta</Button>
                    <Button variant="outline-secondary" onClick={()=>{deleteCard()}}>Apagar Etiqueta</Button>
                    <Button variant="outline-secondary" onClick={()=>{popProduct()}}>Apagar Produto</Button>
                </InputGroup.Prepend>
            </InputGroup>
            {searchList()}
        </div>
        
        <div>
            {showCardList()}  
        </div>   
        </div>);
}