import { Carousel } from "react-bootstrap";
import { Carousel as Car } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import extra from "../styles/extra.module.css";

import React from 'react';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const sizeCarousel = "30vh";

let PainelArray  = [
    {src : "https://lh3.googleusercontent.com/drive-viewer/AITFw-yDXJzdse0E6SKVJJ3C9ZWh7G1syxlhSB5n3XZC_m2_HTSu9fF_FJbKs14NpmE8xEYvM-W_su1ykPo28ra4Sjfl4UM=w1366-h629", alt : "logo", title: "Simple Pure", text: "Salão de estica Natural"},
    {src : "/Painel1.png", alt : "painel", title: "Trate Por dentro o que se vê por fora", text: ""},
    {src : "/backGround.jpg", alt : "painel", title: "Trata Por dentro o que se vê por fora", text: ""},
    {src : "/Promo.jpg", alt : "painel", title: "1 Like  = 5% de Desconto", text: "Valido para qualquer tratamento"},
]

//decrepated
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

function buildCar() {
    let i = 0;

    // item = {src, alt, title, text}
    return PainelArray.map(item => (
        <div key = {i++} className="carousel-Item">
            
            <div className={extra.carou}>
               <img 
                 /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
                 
                 src={item.src}
                 alt={item.alt}
                /> 
                <p><h3>{item.title}</h3></p>
            </div>
        </div>
    ));
}




export default function FirtsPageCarousel(){
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return(
        <div>            
            <Car afterChange={onChange} autoplay = {true} autoplaySpeed={2000} className="carousel slide" effect="fade">
                {buildCar()}
            </Car>
            
        </div>
    );
}