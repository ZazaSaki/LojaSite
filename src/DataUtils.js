// Server-only helper: reads the product sheet from public/exelTest.xlsx.
// Used by the API route and by getStaticProps (never import it in client code).
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";
import { parseSheet } from "./parseSheet";

XLSX.set_fs(fs);

const EXCEL_FILE = path.join(process.cwd(), "public", "exelTest.xlsx");

// Read every product from the excel file, already cleaned up
export default function readProducts() {
  const wb = XLSX.readFile(EXCEL_FILE);
  return parseSheet(wb.Sheets["Produtos"]).map(({ id, name, family, price }) => ({
    id,
    family,
    name: family ? String(name).replace(family, "").trim() : String(name).trim(),
    price,
    type: "product",
  }));
}
