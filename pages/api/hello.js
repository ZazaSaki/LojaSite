// Next.js API route support: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import readProducts from "../../src/DataUtils";
import { regulate, filterByFamily } from "../../src/ProductsUtils";

export default function handler(req, res) {
  //getting params from request
  const familyName = regulate(req.query.family);
  const productId = regulate(req.query.id);

  const List = readProducts();

  if (productId) {
    return res.status(200).json(List.filter(({id}) => id === productId));
  }

  if (familyName) {
    return res.status(200).json(filterByFamily(List, familyName));
  }

  return res.status(200).json(List);
}
