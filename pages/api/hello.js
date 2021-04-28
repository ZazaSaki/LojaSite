// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import xlsx from 'xlsx';
//import jsWritter from "../../src/fileJsWriter";

function jsWritter(List) {
    //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
    const data = JSON.stringify({
        total : List.length,
        List
    })

    fs.writeFileSync("/temp/dataBase.json", data);

}

function readExcel() {
  const dirRelativeToPublicFolder = 'exelTest.xlsx';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const wb = xlsx.readFile(dir);
  const ws = wb.Sheets['Produtos'];
  let List = []
  const cell1 = ws['L10'];
  const cell2 = ws['A10'];
  let i=5;
  
  function cell(letter){

      if(ws[letter+i]) return ws[letter+i].v;
      return null
  }

  do {
      
      List.push({id:cell('A'), name: cell('C'), family : cell('B'), price : cell('L').toFixed(2)+"€"});
      i = i+1;
  } while (cell('A'));

  return List;
}

export default (req, res) => {
  jsWritter(readExcel());
  const dirRelativeToPublicFolder = 'dataBase.json';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const data = fs.readFileSync('./public/dataBase.json');

  //const {List: rawList} = JSON.parse(data);

  const rawList  = readExcel();
  
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
