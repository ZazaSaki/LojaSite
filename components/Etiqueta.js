import {quadro, logo, name, price, table, td, h3} from "../styles/etiqueta.module.css";


export default function Etiqueta({List}){

    return(
        <div className = {quadro}>

            <table className = {table}>
                <tr>
            <th className = {td}>
            <img className={logo} src = "https://scontent.flis4-1.fna.fbcdn.net/v/t1.18169-9/15350713_446076315516114_6277619616950754977_n.png?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=yUDyQuhX1nMAX9nVZDN&_nc_ht=scontent.flis4-1.fna&oh=ea9f041d6d22821d574b6e4203722b11&oe=608C248B"/>
            </th>
            <th className = {td}>
            <h3 className = {h3}>{List[0].family}</h3>
            </th>
            </tr>
            </table>
        <table className = {table}>
            
            {List.map(product => (
                <tr>
                    <td className = {name}>{product.name}</td>
                    <td className = {price}>{product.price}</td>
                </tr>
            ))}
            

            
        </table>
        </div>
);
}