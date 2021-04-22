import 'bootstrap/dist/css/bootstrap.min.css';
import { Media } from 'react-bootstrap';
import {card} from "../styles/extra.module.css";


export default function Card({item}){
    
    const {text, title, src} = item;
    
    return (
        <Media className = {card}>
            <img
            src={src}
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5>{title}</h5>
            <p>
                {text}
            </p>
        
            
            </Media.Body>
        </Media>
      );
}