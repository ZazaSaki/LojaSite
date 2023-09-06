import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Card_2({item, action}) {
    const {text, title, src, id} = item;
    
    return(
        <Card style={{ width: '18rem', margin : '10px'}}>
            <Card.Img variant="top" src={src} style={{width : '100%', height : '250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>

                <Button variant="primary" onClick={action}>
                    <a href={`/products/${id}`}>Ver</a>
                </Button>
                <a href="/products/gemology">click me</a>
                
            </Card.Body>
        </Card>
    );
}