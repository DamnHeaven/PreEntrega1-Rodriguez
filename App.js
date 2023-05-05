
const productManager = require('./ProductManager.js');
const productAcssesor = require('./ProductAccessor.js');
const data = require('./MockData.js');

const admin = new productManager(new productAcssesor());


data.forEach(product => {
    const nuevoId = admin.addProduct(product);
    if (nuevoId) console.log(`Se ha agregado el producto con ID ${nuevoId} ${product.title}`);
});


console.log(`Producto ${admin.removeProductById(2)} borrado`);
console.log(admin.getProducts());

console.log(admin.getProductById(3) ?? "No hay producto 3");
