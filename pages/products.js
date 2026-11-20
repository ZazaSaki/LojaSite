import TypeItemPage from "../components/TypeItemPage";
import TopBar from "../components/TopBar";
import readProducts from "../src/DataUtils";

//Getting pre cooked info at build time
export async function getStaticProps(){
    return {
        props : { data: readProducts() }
    };
}

//building page
export default function Products({data}){
    return(<div>
            <TopBar></TopBar>
            <TypeItemPage CardList={data}></TypeItemPage>
        </div>);
}
