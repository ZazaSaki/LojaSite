import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import extra from "../styles/extra.module.css";

const sizeCarousel = "30vh";

let PainelArray  = [
    {src : "/logo.png", alt : "logo", title: "Simple Pure", text: "Salão de estica Natural"},
    {src : "/Painel1.png", alt : "painel", title: "Trate Por dentro o que se vê por fora", text: ""},
    {src : "/backGround.jpg", alt : "painel", title: "Trata Por dentro o que se vê por fora", text: ""},
    {src : "/Promo.jpg", alt : "painel", title: "1 Like  = 5% de Desconto", text: "Valido para qualquer tratamento"},
]

function buildCrousel() {
    let i = 0;
    return PainelArray.map(item => (
        <Carousel.Item key = {i++}>
            
            <div className={extra.crop}>
               <img
                 /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
                src={item.src}
                alt={item.alt}
                /> 
            </div>
            
            <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ));
}

export default function FirtsPageCarousel(){
    return(
        <Carousel>
            {buildCrousel()}
        </Carousel>
    );
}