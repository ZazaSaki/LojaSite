import styles from "../../styles/etiqueta.module.css";

const {quadro, logo, name, price, table, td, h3} = styles;



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

    return(
        <div className = {quadro}>

            <table className = {table}>
                <tbody>
                <tr>
                    <th className = {td}>
                        <img className={logo} src = "/logo.png" alt="logo"/>
                    </th>
                    <th className = {td}>
                        <h3 className = {h3}>{getTitle()}</h3>
                    </th>
                </tr>
                </tbody>
            </table>
            <table className = {table}>
                
                <tbody>
                {getList().map((product, index) => (
                    <tr key = {product.id ?? index}>
                        <td className = {name}>{product.name}</td>
                        <td className = {price}><input style = {{border : "0px", width : "55px", fontWeight : "bold"}}defaultValue = {product.price}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
);
}