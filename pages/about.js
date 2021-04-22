
import { Media } from "react-bootstrap";
import TopBar from "../components/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function products(){
    

    return(
        <div>
            <TopBar></TopBar>
            <div>
                
                <Media>
                    
                    <Media.Body style = {{margin : '10px'}}>
                    <h2>Quem somos?</h2> 
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                    </p>
                        
                    </Media.Body>
                    <img
                        width={600}
                        height={300}
                        className="ml-3"
                        src="/250x300.svg"
                        alt="Generic placeholder"
                    />
                </Media>

                <Media>
                    <img
                        width={600}
                        height={300}
                        className="ml-3"
                        src="/250x300.svg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style = {{margin : '10px'}}>
                    <h2>Onde estamos?</h2> 
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                    </p>
                        
                    </Media.Body>
                    
                </Media>
            </div>
            
        </div>);
}