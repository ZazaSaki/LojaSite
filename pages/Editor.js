
import 'bootstrap/dist/css/bootstrap.min.css';  
import Etiqueta from '../components/Editor/Etiqueta';
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







export default function products({data}){
    
    const [search, setSearch] = useState("");
    const [cardId, setCardId] = useState(0);

    //setting up Cardlist logic
    const [CardList, setCardList] = useState([]);;

    function newCard(){
        setCardList([...CardList,{list:[]}]);
    }

    function newProduct(product){
        CardList[cardId].list.push(product);
    }

    function deleteCard(){
        const l1 = CardList.slice(0,cardId);
        const l2 = CardList.slice(cardId + 1, CardList.length);
        
        setCardList([...l1, ...l2]);
    }

    function mapCardList(){
        let i = 0;
        const t = CardList.map((card)=>{
            const index = i++;
           return (<Button onClick={()=>{setCardId(index);}} key={i} ><Etiqueta List={card.list}></Etiqueta></Button>);
        });

        return t;
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
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Procurar {cardId+1}</InputGroup.Text>
            </InputGroup.Prepend>
            
            <FormControl aria-describedby="basic-addon1" onChange= {(e)=>setSearch(e.target.value)}/>
            
            <InputGroup.Prepend>
                <Button variant="outline-secondary" onClick={()=>{newCard()}}>Nova Etiqueta</Button>
                <Button variant="outline-secondary" onClick={()=>{deleteCard()}}>Apagar Etiqueta</Button>
            </InputGroup.Prepend>
            
        </InputGroup>
            {mapCardList()}     
        </div>);
}