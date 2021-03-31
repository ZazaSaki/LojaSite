import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import TopBar from "../components/TopBar";
import {cardEnvelop} from "../styles/extra.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function TypeItemPage({CardList}){
    return(<div>
        <TopBar></TopBar>
        <div class = {cardEnvelop}> 
            <CardGroup class='container' List = {CardList} Card = {Card_2}></CardGroup>
        </div>
        
        
    </div>);
}