// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {readExcel } from "../../src/execelRd";
//import jsWritter from "../../src/fileJsWriter";

import fs from "fs";
function jsWritter(List) {
    //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
    const data = JSON.stringify({
        total : List.length,
        List
    })

    fs.writeFileSync("./public/dataBase.json", data);

}

export default (req, res) => {
  jsWritter(readExcel());
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
