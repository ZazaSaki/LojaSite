import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardGroup({List, Card}){
    return (
        <div>
            {List.map(card => (
                <Card title = {card.title} text = {card.text} src = {card.src} key = {card.title}/>
                
            ))}
        </div>
      );
}