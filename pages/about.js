import TopBar from "../components/TopBar";

const MAP_URL = "https://www.google.pt/maps/place/Simple+Pure+-+Spa/@39.8213652,-7.4945025,17z/data=!3m1!4b1!4m5!3m4!1s0xd3d5fcd85a13457:0x886599f94585994b!8m2!3d39.8213621!4d-7.4923087";

export default function About(){
    return(
        <div>
            <TopBar></TopBar>
            <div>
                <div className="d-flex flex-wrap align-items-start">
                    <div className="flex-grow-1" style = {{margin : '10px'}}>
                    <h2>Quem somos?</h2>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                    </p>
                    </div>
                    <img
                        width={600}
                        height={300}
                        className="ms-3 img-fluid"
                        src="/250x300.svg"
                        alt="Generic placeholder"
                    />
                </div>

                <div className="d-flex flex-wrap align-items-start">
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                        <img
                            width={600}
                            height={300}
                            className="ms-3 img-fluid"
                            src="/map.png"
                            alt="Mapa"
                        />
                    </a>

                    <div className="flex-grow-1" style = {{margin : '10px'}}>
                    <h2>Onde estamos?</h2>
                    <p>
                        <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                            Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco
                        </a>
                    </p>
                    </div>
                </div>
            </div>
        </div>);
}
