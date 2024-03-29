//main in«mport
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

export async function getStaticPaths(){
    

    //defining static paths
     return {
        paths:[
            {
                params : {
                    family : "Gemology",    
                },
            }
        ],
        fallback : 'blocking',
        
    };
}

//props generator per path
export async function getStaticProps(context) {
    
    //data getter
    async function requestFamily(family) {
        //Requesting data to the api
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello?family=${family}`);
        const data = await res.json();

        //cleaning data to send to the client
        return cleanData(data)
    }

    return {
        props : {
            data : await requestFamily(context.params.family)
        }
    };

}

export default function products({data}){
    //reading params
    const router = useRouter();
    const family = router.query.family;

    //building page
    return(<div>
            <TopBar></TopBar>
            <Button>
                <NavLink href = "/products">
                    Voltar
                </NavLink>
            </Button>
            id = {family}
            <div className = {cardEnvelop}> 
                    <CardGroup className='container' List = {data} Card = {Card_2}></CardGroup>
            </div>
            
        </div>);
}