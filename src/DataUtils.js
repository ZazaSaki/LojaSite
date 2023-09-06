export default function readExcel() {
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