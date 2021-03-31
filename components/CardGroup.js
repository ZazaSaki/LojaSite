import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardGroup({List, Card}){
    return (
        <div class='row'>
            {List.map(card => (
                <Card title = {card.title} text = {card.text} src = {card.src} link={card.link} key = {card.title}/>
                
            ))}
        </div>
      );
}