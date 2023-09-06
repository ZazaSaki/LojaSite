import { useRouter } from "next/router";

import {NavLink} from "react-bootstrap";


import TypeItemPage from "../../../components/TypeItemPage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from "react";
import TopBar from "../../../components/TopBar";
import {cardEnvelop} from "../../../styles/extra.module.css";
import CardGroup from "../../../components/CardGroup";
import Card_2 from "../../../components/Card_Type";
import { Button } from "react-bootstrap";
import cleanData from "../../../src/ProductsUtils";


const trashtext = "Simple sentence ta do effectssssss with impact a little bit bit bit ";

export async function getServerSideProps({params}){
    //reading parameters
    const {id} = params;
    
    //Requesting data to the api
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello?id=${id}`);
    const data = await res.json();

    //cleaning data to send to the client
    const sendable = cleanData(data)
    
    //sending to client
    return {
        props : {
            data : sendable
        }
    };
}

export default function products({data}){
    //reading params
    const router = useRouter();
    const id = router.query.id;

    const {src, title, price, text} = data[0];

    //building page
    return(<div>
            <TopBar></TopBar>
            <Button>
                <NavLink href = "/products">
                    Voltar
                </NavLink>
            </Button>
            id = {id}
            title = {title}
            price = {price}
            
            
            
        </div>);
}