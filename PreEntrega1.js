class ProductManager{
constructor(){
    this.products = []

}

addProduct(prod){
    this.id = prod.id
    this.code = prod.code
    if(this.products.some(product => product.code === this.code))
    {
        console.log("No se puede")
    }
    else if(this.products.some(product => product.id === prod.id)){
    prod.id++
    this.products.push(prod)
    }
    else{
        prod.id = 1
        this.products.push(prod)
    }
   
}

getProducts(){
    return this.products
}

getProductbyId(id){
    return this.products.filter(product => product.id === id)
}

}
let pr1 = new ProductManager()
pr1.addProduct({
    title: "Balon",
    description: "Deportivo",
    price: 500,
    thumbnail: "Imagen1",
    code: "123",
    stock: 30

})


console.log(pr1.getProducts())
console.log(pr1.getProductbyId(1))