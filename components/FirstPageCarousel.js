import { Carousel as Car } from "antd";
import extra from "../styles/extra.module.css";

import React from 'react';



let PainelArray  = [
    {src : "/logo.png", alt : "logo", title: "Simple Pure", text: "Salão de estica Natural"},
    {src : "/Painel1.png", alt : "painel", title: "Trate Por dentro o que se vê por fora", text: ""},
    {src : "/backGround.jpg", alt : "painel", title: "Trata Por dentro o que se vê por fora", text: ""},
    {src : "/Promo.jpg", alt : "painel", title: "1 Like  = 5% de Desconto", text: "Valido para qualquer tratamento"},
]

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
                <div className={extra.caption}><h3>{item.title}</h3></div>
            </div>
        </div>
    ));
}




export default function FirtsPageCarousel(){
    return(
        <div>            
            <Car autoplay = {true} autoplaySpeed={2000} className="carousel slide" effect="fade">
                {buildCar()}
            </Car>
            
        </div>
    );
}