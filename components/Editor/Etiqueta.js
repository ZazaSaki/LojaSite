import {quadro, logo, name, price, table, td, h3} from "../../styles/etiqueta.module.css";



export default function Etiqueta({List, title}){

    function getTitle(){
        //validating title
        if (!title) {
            //validating list
            if(!List || !List[0]){
                return "no List";
            }
            return List[0].family;
        }

        return title;
    }

    function getList(){
        //validating list
        if (!List || !List[0]) {
            return [];
        }

        return List;
    }

    console.log(getTitle());

    return(
        <div className = {quadro}>

            <table className = {table}>
                <tr>
                    <th className = {td}>
                        <img className={logo} src = "logo.png"/>
                    </th>
                    <th className = {td}>
                        <h3 className = {h3}>{getTitle()}</h3>
                    </th>
                </tr>
            </table>
            <table className = {table}>
                
                {getList().map(product => (
                    <tr key = {product.name}>
                        <td className = {name}>{product.name}</td>
                        <td className = {price}>{product.price}</td>
                    </tr>
                ))}
                
            </table>
        </div>
);
}