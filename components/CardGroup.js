export default function CardGroup({List, Card}){
    
    return (
        <div className='row'>
            {List.map((card,index) => (
                <Card item={card} key = {index}/>
            ))}
        </div>
      );
}