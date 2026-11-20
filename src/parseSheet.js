// Parse the "Produtos" worksheet into raw rows {id, name, family, price}.
// Safe to use both on the server and in the browser.
export function parseSheet(ws) {
  const List = [];
  if (!ws) return List;

  let i = 5;
  const cell = (letter) => (ws[letter + i] ? ws[letter + i].v : null);

  while (cell("A")) {
    const price = cell("L");
    List.push({
      id: String(cell("A")),
      name: cell("C") ?? "",
      family: cell("B") ?? null,
      price: typeof price === "number" ? price.toFixed(2) + "€" : price ?? "",
    });
    i++;
  }

  return List;
}
