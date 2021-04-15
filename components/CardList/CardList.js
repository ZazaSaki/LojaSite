import React from "react";
import { Button } from "react-bootstrap";
import Etiqueta from "../Editor/Etiqueta";


export default function CardListComp({CardList, setCardId, Num, toImpress}){
    
    //List params
    const groupSize = 6;
    const arraySize = parseInt(CardList.length/groupSize,10)+parseInt((CardList.length%groupSize + groupSize - 1)/groupSize);
    
    //Main List
    const list = (CardList.length ==0)? [] : new Array(arraySize);
    
    //teporary List to organize the cards in groups of <groupSize>
    let TempList = [];

    function hidden(val) {
        console.log({toImpress});
        console.log({Num});
        console.log({val});
        console.log({ret : (toImpress)? false : val != parseInt(Num)});
        return (!toImpress)? false : val == parseInt(Num);
    }
    
    function showCardListEditor(){
        
        return CardList.map((card, index)=>
            (<Button onClick={()=>{setCardId(index);}} key={index} ><Etiqueta List={card.list}></Etiqueta></Button>))
    }

    function showCardList(){
        let i = 0;
        
        //spliting list
        CardList.map((card)=>{
            
            const index = i++;

            TempList.push(<Button onClick={()=>{setCardId(index);}} key={i} ><Etiqueta List={card.list}></Etiqueta></Button>);

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
        const final = list.map(({group, hidden})=>{
            let mainCounter = 0;
            return(<div key = {"group" + mainCounter} hidden={hidden}>
                {group.map((card)=>{
                    const index = i++;
                    if((i-1)%6==0 && i-1>0) mainCounter++;
                    console.log({mainCounter});
                    console.log({i});
                    return(<Button onClick={()=>{setCardId(index);}} key={"card" + index} ><Etiqueta List={card.list}></Etiqueta></Button>)})}
            </div>)
        });

        console.log(list);

        return final;
    }

    

    return (!toImpress) ? showCardListEditor() : showCardList();
}