// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readExcel } from "../../src/execelRd";



export default (req, res) => {
  const List = readExcel('./public/exelTest.xlsx');

  res.statusCode = 200
  res.json(List);
}
