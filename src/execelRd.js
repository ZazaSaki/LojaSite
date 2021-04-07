import xlsx from 'xlsx';
import fs from 'fs';
import path from "path";

const dirRelativeToPublicFolder = 'exelTest.xlsx';
const dirRelativeToPublicFolderD = 'exelTest.xlsx';

//const dir = path.resolve('./public', dirRelativeToPublicFolder);

export function writeExcel() {
    //const wb = xlsx.
}

export function readExcel(dir) {
    

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

    //const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
    const data = JSON.stringify({
        total : List.length,
        List
    })

    fs.writeFileSync("./public/dataBase.json", data);

    return List;
}

