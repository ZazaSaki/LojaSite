import 'bootstrap/dist/css/bootstrap.min.css';  
import {search as searchClass} from "../../styles/etiqueta.module.css";
import { ListGroup } from "react-bootstrap";
import SearchItem from '../SearchItem';


export default function SearchList({list, action, active}){
    
    const dd = active? {display: 'block'} : {display: 'none'};
    return (
        
                <ListGroup className={searchClass} style={dd}>
                    {list.map((product)=>(<SearchItem product={product} selfAdd={action} key={product.name}></SearchItem>))}
                </ListGroup>
        
        );
}