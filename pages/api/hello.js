// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GenerateDataBase } from "../../src/execelRd";
//import jsWritter from "../../src/fileJsWriter";
import fs from 'fs';
import path from 'path';


export default (req, res) => {
  GenerateDataBase();
  const dirRelativeToPublicFolder = 'dataBase.json';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const data = fs.readFileSync('./public/dataBase.json');

  const {List: rawList} = JSON.parse(data);
  
  const List = rawList.map(({id, name, family,price})=>(
    {id,
    family,
    name : name.replace(family, '').trim(),
    price}
  ));

  res.statusCode = 200
  res.json(List);

  return;
}
