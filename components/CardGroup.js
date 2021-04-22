import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardGroup({List, Card, action}){
    
    return (
        <div className='row'>
            {List.map(card => (
                <Card title = {card.family} text = {card.name} src = {card.src} action={()=>(action(card.Type))} key = {card.title}/>
                
            ))}
        </div>
      );
}