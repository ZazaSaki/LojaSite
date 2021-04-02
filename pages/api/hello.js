// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs, { readFile } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import excel from 'xlsx';


export default (req, res) => {
  const dirRelativeToPublicFolder = 'exelTest.xlsx'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const wb = excel.readFile(dir);
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

  //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(List);
}
