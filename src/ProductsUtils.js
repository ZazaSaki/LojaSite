// Shape products for the cards
export default function cleanData(data) {
    return data.map(product => ({title : product.name, price: product.price, src:"", id : product.id, type: product.type, family: product.family ?? null}));
}

// Capitalize the first letter of the string
export function regulate(name) {
    if (typeof name == "string" && name.length > 0) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return undefined;
}

// Filter by family name ("Outros" groups products without a family)
export function filterByFamily(List, familyName) {
    if (familyName === "Outros") return List.filter(({family}) => !family);
    return List.filter(({family}) => family === familyName);
}
