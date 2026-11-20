import CardGroup from "../components/CardGroup";
import Card_2 from "../components/Card_Type";
import styles from "../styles/extra.module.css";


export default function TypeItemPage({CardList, action}){
    let temp = [];

    const List = CardList.map((card)=>{
        if (!temp.includes(card.family)) {
            temp.push(card.family);
            const family = card.family ? card.family : 'Outros';
            return {title: family, src:'', id: family};
        }
    }).filter((card)=>(card));

    
    return(<div>
        <div className = {styles.cardEnvelop}> 
            <CardGroup List = {List} Card = {Card_2}></CardGroup>
        </div>
        
        
    </div>);
}