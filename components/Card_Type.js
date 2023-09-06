import { Button, Card, NavLink } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Card_2({item}) {
    const {price, title, src, id, type, family} = item;
     
    const toGoLink = (type == "product") ? `/products/item/${id}` : `/products/family/${title}`
    
    return(
        <Card style={{ width: '18rem', margin : '10px'}}>
            <Card.Img variant="top" src={src} style={{width : '100%', height : '250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {price}
                </Card.Text>

                <Button variant="primary">
                    <NavLink href={toGoLink}>Ver</NavLink>
                </Button>
                <a href="/products/gemology">click me</a>
                
            </Card.Body>
        </Card>
    );
}