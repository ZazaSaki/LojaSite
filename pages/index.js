
import CardGroup from "../components/CardGroup";
import Card from "../components/Card_1";
import FirtsPageCarousel from "../components/FirstPageCarousel";
import MyCard from "../components/MyCard";
import TopBar from "../components/TopBar";

const trashtext = "'Tis better to be vile than vile esteem'd, When not to be receives reproach of being; And the just pleasure lost, which is so deem'd Not by our feeling, but by others' seeing: For why should others' false adulterate eyes Give salutation to my sportive blood? Or on my frailties why are frailer spies, Which in their wills count bad what I think good? No, I am that I am, and they that level At my abuses reckon up their own:";

const CardList = [
    {title : "Apresentação 1",src : "/250x300.svg",  text : trashtext},
    {title : "Apresentação 2",src : "/250x300.svg",  text : trashtext},
    {title : "Apresentação 3",src : "/250x300.svg",  text : trashtext}
]

const card = CardList[0];
//<CardGroup List = {CardList}></CardGroup>

export default function Home(){
    return(<div>
        <TopBar></TopBar>
        <FirtsPageCarousel></FirtsPageCarousel>
        <MyCard 
            img_src={"/logo.png"} 
            title = "Cartão de teste" 
            text={"Vou escrever mesmo bue aqui"} 
            flipped = {false}>
        </MyCard>
        <MyCard 
            img_src={"/logo.png"} 
            title = "Cartão de teste" 
            text={"Vou escrever mesmo bue aqui"} 
            flipped = {true}>
        </MyCard>
        <CardGroup List = {CardList} Card = {Card}></CardGroup>
        
    </div>);
}