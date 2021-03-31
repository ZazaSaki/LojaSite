import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import TopBar from "../components/TopBar";
import {cardEnvelop} from "../styles/extra.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';  



const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";

const CardList = [
    {title : "Clase de Produto 1",src : "/250x300.svg",  text : trashtext},
    {title : "Clase de Produto 2",src : "/250x300.svg",  text : trashtext},
    {title : "Clase de Produto 3",src : "/250x300.svg",  text : trashtext}
]

const card = CardList[0];

//<CardGroup List = {CardList}></CardGroup>

export default function test(){
    return(<div>
        <TopBar></TopBar>
        <div class = {cardEnvelop}> 
            <CardGroup class='container' List = {CardList} Card = {Card_2}></CardGroup>
        </div>
        
        
    </div>);
}