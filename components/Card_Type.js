import { Button, Card } from "react-bootstrap";

export default function Card_2({item}) {
    const {price, title, src, id, type} = item;

    const toGoLink = (type == "product") ? `/products/item/${id}` : `/products/family/${encodeURIComponent(title)}`

    return(
        <Card style={{ width: '18rem', margin : '10px'}}>
            <Card.Img variant="top" src={src || "/250x300.svg"} style={{width : '100%', height : '250px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {price}
                </Card.Text>

                <Button variant="primary" href={toGoLink}>Ver</Button>
            </Card.Body>
        </Card>
    );
}
