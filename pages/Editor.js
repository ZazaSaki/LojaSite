
import 'bootstrap/dist/css/bootstrap.min.css';  
import Etiqueta from '../components/Etiqueta';
import TopBar from '../components/TopBar';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Card from '../components/Card_1';

//get data from server
export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/hello');
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
    
    const list = data.slice(0,3);
    console.log(data);
    return(<div>
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>Procurar</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" />
        <InputGroup.Prepend>
        <Button variant="outline-secondary">Nova Etiqueta</Button>
        <Button variant="outline-secondary">Apagar Etiqueta</Button>
        </InputGroup.Prepend>
        </InputGroup>
            <Etiqueta List={list}></Etiqueta>
        </div>);
}