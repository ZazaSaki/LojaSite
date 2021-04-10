import 'bootstrap/dist/css/bootstrap.min.css';  

import { ListGroupItem } from "react-bootstrap";


export default function SearchItem({product, selfAdd}){
    
    
    return <ListGroupItem action onClick={()=>{selfAdd(product);}}>{product.family + " " + product.name}</ListGroupItem>
}