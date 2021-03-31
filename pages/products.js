import TypeItemPage from "../components/TypeItemPage";
import 'bootstrap/dist/css/bootstrap.min.css';  



const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";

const CardList = [
    {title : "Classe de Produto 1",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Produto 2",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Produto 3",src : "/250x300.svg",  text : trashtext}
]

const card = CardList[0];

//<CardGroup List = {CardList}></CardGroup>

export default function products(){
    return(<TypeItemPage CardList={CardList}></TypeItemPage>);
}