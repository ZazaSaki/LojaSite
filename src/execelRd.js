import xlsx from 'xlsx';
import path from "path";
import writer from './fileJsWriter';

const dirRelativeToPublicFolder = 'exelTest.xlsx';
const dirRelativeToPublicFolderD = 'exelTest.xlsx';

const dir = path.resolve('./public', dirRelativeToPublicFolder);

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

    return List;
}

export function GenerateDataBase() {
    const List = readExcel(dir);

    writer(List);
}

