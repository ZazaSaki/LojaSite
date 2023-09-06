

export default function cleanData(data) {
    return data.map(product => ({title : product.name, price: product.price, src:"", id : product.id, type: product.type}));
}

