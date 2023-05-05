
module.exports = class ProductManager {

    constructor(productAcssesor) {
        this._productAccesor = productAcssesor;
    }

    addProduct(product) {

        if (this.#isProductInvalid(product)) {
            console.error(`Por favor complete todos los campos para el producto ${product.code}`);
            return;
        }

        if (this.#productExists(product.code)) {
            console.error(`Ya hay un producto con el code: ${product.code}`)
            return;
        }

        return this._productAccesor.addProduct(product);
    }

    getProducts() {
        return this._productAccesor.getProducts();
    }

    getProductById(id) {
        return this._productAccesor.getProductById(id);
    }
    removeProductById(id) {
        return this._productAccesor.removeProductById(id);
    }

    //#region private methods
    #isProductInvalid = (product) => !product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock;
    #productExists = (code) => !!this._productAccesor.getProductByCode(code);

    //#endregion private methods
}
