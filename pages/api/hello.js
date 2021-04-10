// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readExcel } from "../../src/execelRd";
import jsWritter from "../../src/fileJsWriter";



export default (req, res) => {
  const List = readExcel('./public/exelTest.xlsx');
  jsWritter(List);

  res.statusCode = 200
  res.json(List);
}
