import styles from "../../styles/etiqueta.module.css";
import { ListGroup } from "react-bootstrap";
import SearchItem from '../SearchItem';


export default function SearchList({list, action, active}){
    
    const dd = active? {display: 'block'} : {display: 'none'};
    return (
        
                <ListGroup className={styles.search} style={dd}>
                    {list.map((product)=>(<SearchItem product={product} selfAdd={action} key={product.id ?? product.name}></SearchItem>))}
                </ListGroup>
        
        );
}