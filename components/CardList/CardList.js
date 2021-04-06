import React from "react";
import { Button } from "react-bootstrap";
import Etiqueta from "../Editor/Etiqueta";


export default function CardListComp({CardList, setCardId}){
    
    function showCardList(){
        let i = 0;
        const t = CardList.map((card)=>{
            const index = i++;
           return (<Button onClick={()=>{setCardId(index);}} key={i} ><Etiqueta List={card.list}></Etiqueta></Button>);
        });

        return t;
    }

    

    return(showCardList());
}