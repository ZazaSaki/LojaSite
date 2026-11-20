import { Button } from "react-bootstrap";

import TopBar from "../../../components/TopBar";
import styles from "../../../styles/extra.module.css";
import CardGroup from "../../../components/CardGroup";
import Card_2 from "../../../components/Card_Type";
import readProducts from "../../../src/DataUtils";
import cleanData, { regulate, filterByFamily } from "../../../src/ProductsUtils";

export async function getStaticPaths(){
    //pre-render every family found in the excel file
    const families = [...new Set(readProducts().map(({family}) => family || 'Outros'))];

    return {
        paths: families.map(family => ({ params : { family } })),
        fallback : 'blocking',
    };
}

//props generator per path
export async function getStaticProps(context) {
    const family = regulate(context.params.family);
    const data = cleanData(filterByFamily(readProducts(), family));

    if (data.length === 0) {
        return { notFound: true };
    }

    return {
        props : { data, family }
    };
}

export default function Family({data, family}){
    //building page
    return(<div>
            <TopBar></TopBar>
            <Button href="/products" style={{margin: '10px'}}>Voltar</Button>
            <h2 style={{marginLeft: '50px'}}>{family}</h2>
            <div className = {styles.cardEnvelop}>
                    <CardGroup List = {data} Card = {Card_2}></CardGroup>
            </div>
        </div>);
}
