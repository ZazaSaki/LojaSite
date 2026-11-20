import { Button } from "react-bootstrap";

import TopBar from "../../../components/TopBar";
import readProducts from "../../../src/DataUtils";
import cleanData from "../../../src/ProductsUtils";

export async function getStaticPaths() {
    return {
        paths : [{ params : { id : '20301' } }],
        fallback : 'blocking'
    }
}

export async function getStaticProps(context){
    //reading parameters
    const id = String(context.params.id);

    const data = cleanData(readProducts().filter(product => product.id === id));

    if (data.length === 0) {
        return { notFound: true };
    }

    return {
        props : { data: data[0] }
    };
}

export default function Product({data}){
    const {id, title, price, family} = data;

    //building page
    return(<div>
            <TopBar></TopBar>
            <Button href={family ? `/products/family/${family}` : "/products"} style={{margin: '10px'}}>Voltar</Button>
            <div style={{margin: '50px'}}>
                <h2>{title}</h2>
                <p>{family}</p>
                <h4>{price}</h4>
                <small>Ref. {id}</small>
            </div>
        </div>);
}
