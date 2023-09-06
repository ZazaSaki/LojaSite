import xlsx from 'xlsx';
import path from "path";
import jsWriter from './fileJsWriter';

const dirRelativeToPublicFolder = 'exelTest.xlsx';
const dirRelativeToPublicFolderD = 'exelTest.xlsx';

const dir = path.resolve('./data', dirRelativeToPublicFolder);

export function writeExcel() {
    //const wb = xlsx.
}


//read the excelFile and returns a json fromated List
export function readExcel() {
    

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

    jsWriter(List);
    return List;
}

