
import { Media, NavLink } from "react-bootstrap";
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

                    <NavLink 
                        href = "https://www.google.pt/maps/place/Simple+Pure+-+Spa/@39.8213652,-7.4945025,17z/data=!3m1!4b1!4m5!3m4!1s0xd3d5fcd85a13457:0x886599f94585994b!8m2!3d39.8213621!4d-7.4923087" 
                        style={{border : "0px", margin : "0px", padding : "0px"}}
                        >
                        <div>
                            <img
                                width={600}
                                height={300}
                                className="ml-3"
                                src="/map.png"
                                alt="Generic placeholder"
                            />
                        </div>
                        
                    </NavLink>
                    
                    <Media.Body style = {{margin : '10px'}}>
                    <h2>Onde estamos?</h2> 
                    <p>
                        <NavLink href = "https://www.google.pt/maps/place/Simple+Pure+-+Spa/@39.8213652,-7.4945025,17z/data=!3m1!4b1!4m5!3m4!1s0xd3d5fcd85a13457:0x886599f94585994b!8m2!3d39.8213621!4d-7.4923087">
                            Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco
                        </NavLink>
                    </p>
                        
                    </Media.Body>
                    
                </Media>
            </div>
            
        </div>);
}