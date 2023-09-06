import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import TopBar from "../components/TopBar";
import {cardEnvelop} from "../styles/extra.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function TypeItemPage({CardList, action}){
    let temp = [];

    const List = CardList.map((card)=>{
        if (!temp.includes(card.family)) {
            temp.push(card.family);
            console.log(card.family);
            const family = card.family ? card.family : 'Outros';
            return {title: family, src:'', id: family};
        }
    }).filter((card)=>(card));

    console.log({List});
    
    return(<div>
        <div className = {cardEnvelop}> 
            <CardGroup className='container' List = {List} Card = {Card_2} action={action}></CardGroup>
        </div>
        
        
    </div>);
}