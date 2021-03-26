import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card_1';


const ccc = [
    {title : "Apresentação 1",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 1"},
    {title : "Apresentação 2",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 2"},
    {title : "Apresentação 3",src : "/250x300.svg",  text : "Texto Publicitario aleatorio 3"}
]

export default function CardGroup(){
    return (
        <div>
            {ccc.map(card => (
                <Card title = {card.title} text = {card.text} src = {card.src} key = {card.title}/>
                
            ))}
        </div>
      );
}