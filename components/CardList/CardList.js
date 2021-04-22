import React from "react";
import { Button } from "react-bootstrap";
import Etiqueta from "../Editor/Etiqueta";

// Editor card List
export default function CardListComp({CardList, setCardId, Num, toImpress}){
    
    //List params
    const groupSize = 6;
    const arraySize = parseInt(CardList.length/groupSize,10)+parseInt((CardList.length%groupSize + groupSize - 1)/groupSize);
    
    //Main List
    const list = (CardList.length ==0)? [] : new Array(arraySize);
    
    //teporary List to organize the cards in groups of <groupSize>
    let TempList = [];

    function hidden(val) {
        console.log({val, Num, ret :(Num==0)? false : val != parseInt(Num)});
        return (CardList.length < groupSize+1)? false : val != parseInt(Num);
    }
    
    function showCardListEditor(){
        
        return CardList.map((card, index)=>
            (<Button onClick={()=>{setCardId(index);}} key={index} ><Etiqueta List={card.list}></Etiqueta></Button>))
    }

    function showCardList(){
        let i = 0;
        
        //spliting list
        CardList.map((card,mainIndex)=>{
            
            const index = i++;
            console.log({mainIndex});
            TempList.push(<Button onClick={()=>{setCardId(mainIndex)}} key={i} ><Etiqueta List={card.list}></Etiqueta></Button>);

            //checking groupSize = is the group full?
            if (index%groupSize == groupSize-1 || CardList.length-1 == index) {
                //adding group to the main list
                if(TempList!=0) list[parseInt(index/groupSize)] = {group: TempList, hidden: hidden(parseInt(index/groupSize))};
                
                //cleaning Temporary List
                TempList = [];
            }
        });

        i = 0

        //generating jsx
        const final = list.map(({group, hidden}, mainIndex)=>{
            let mainCounter = 0;
            console.log({hidden, mainIndex});
            return(<div key = {"group" + mainIndex} hidden={hidden}>
                {group.map((card)=>{
                    
                    return (card) })}
            </div>)
        });

        console.log(list);

        return final;
    }

    

    return showCardList();
}