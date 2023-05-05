
module.exports = class ProductAccessor {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        let ultimoId = this.products.slice(-1)[0]?.id ?? 0;
        product.id = ++ultimoId;
        this.products.push(product)
        return product.id;
    }

    getProducts() {
        return this.products
    }

    removeProductById(id) {
        this.products = this.products.filter(p => p.id !== id)
        return id;
    }

    getProductById(id) {
        return this.products.find(p => p.id === id)
    }

    getProductByCode(code) {
        return this.products.find(p => p.code === code)
    }
}