import TypeItemPage from "../components/TypeItemPage";
import 'bootstrap/dist/css/bootstrap.min.css';  



const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";

const CardList = [
    {title : "Classe de Serviço 1",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Serviço 2",src : "/250x300.svg",  text : trashtext},
    {title : "Classe de Serviço 3",src : "/250x300.svg",  text : trashtext}
]

//<CardGroup List = {CardList}></CardGroup>

export default function products(){
    return(<TypeItemPage CardList={CardList}></TypeItemPage>);
}