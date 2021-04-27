import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardGroup({List, Card, action}){
    
    return (
        <div className='row'>
            {List.map((card,index) => (
                <Card item={card}  action={()=>(action(card.title))} key = {index}/>
            ))}
        </div>
      );
}