
import CardGroup from "../components/CardGroup";
import Card from "../components/Card_1";
import FirtsPageCarousel from "../components/FirstPageCarousel";
import TopBar from "../components/TopBar";

const CardList = [
    {title : "Apresentação 1",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 1"},
    {title : "Apresentação 2",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 2"},
    {title : "Apresentação 3",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 3"}
]

const card = CardList[0];

//<CardGroup List = {CardList}></CardGroup>

export default function test(){
    return(<div>
        <TopBar></TopBar>
        <FirtsPageCarousel></FirtsPageCarousel>
        <CardGroup List = {CardList}></CardGroup>
        
    </div>);
}