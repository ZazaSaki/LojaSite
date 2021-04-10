// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import { readExcel } from "../../src/execelRd";
//import jsWritter from "../../src/fileJsWriter";
import fs from 'fs';



export default (req, res) => {
  //const List = readExcel('./public/exelTest.xlsx');
  
  const data = fs.readFileSync('./dataBase.json');

  const {List} = JSON.parse(data); 

  res.statusCode = 200
  res.json(List);

  return;
}
