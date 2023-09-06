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

//*
//convert the excel sheet in a json format
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
/**/

export default (req, res) => {
  
  //Capitalize the first letter of the string 
  function regulate(name) {
    
    if(typeof(name)=="string"){
      return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return undefined;
  }
  
  //getting params from request
  const familyName = regulate(req.query.family);
  
  
  //jsWritter(readExcel());
  const dirRelativeToPublicFolder = 'dataBase.json';

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const data = fs.readFileSync('./public/dataBase.json');

  const rawList  = readExcel();
  
  const List = rawList.map(({id, name, family,price})=>(
    {id,
    family : family,
    name : name.replace(family, '').trim(),
    price}
  ));
  

  if(!familyName){
    res.statusCode = 200
    res.json(List);
  }else{
    const famList = List.filter(({family})=> family === familyName)
    res.statusCode = 200
    res.json(famList);
  }
  

  return;
}
