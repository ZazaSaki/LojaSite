import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Card_2({item, action}) {
    const {src, text, title} = item;
    
    return(
        <Card style={{ width: '18rem', margin : '10px'}}>
            <Card.Img variant="top" src={src} style={{width : '100%', height : '250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <Button variant="primary" onClick={action}>ver</Button>
                
            </Card.Body>
        </Card>
    );
}