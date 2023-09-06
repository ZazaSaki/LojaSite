

export default function cleanData(data) {
    return data.map(product => ({title : product.name, text: product.price, src:"", id : product.id, type: "produt"}));
}

