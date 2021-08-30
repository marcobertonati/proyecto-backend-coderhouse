class Stock {

    listOfStock = [];

    constructor(product) {
        this.product = product;
    }

    showStock = (id) => {
        if(id === undefined) {
            return this.listOfStock;
        } else {
            return this.listOfStock[id-1]
        }
    }

    showProductOfStock = (id) => {
  
        const productFinded = this.listOfStock.find((product)=> product.id == id);

        if (productFinded != undefined) {
            return {exist: true, msg: `Producto ${productFinded.title} agregado`, product: productFinded};
        } else {
            return {exist: false, msg: `Producto con id ${id} no existe`}
        }
        
    }

    addProduct = (product) => {
        this.listOfStock.push(product);
        return `Se agregó producto`
    }

    updateProduct = (productToChange) => {

        const productFinded = this.listOfStock.findIndex((product)=> product.id == productToChange.id);


        if(productFinded != -1) {

            this.listOfStock[productFinded].title = productToChange.product.title;
            this.listOfStock[productFinded].price = productToChange.product.price;
            this.listOfStock[productFinded].thumbnail = productToChange.product.thumbnail;
            return `Producto actualizado`
        } else {
            return `No se encontró producto con id ${productToChange.id}`
        }
    }

    deleteProduct = (id) => {

        const productExist = this.listOfStock.some(product => id == product.id);

        if(productExist) {

            const newStock = this.listOfStock.filter(product => product.id != id);

            this.listOfStock = newStock;

            return `Se elimino el producto`;

        } else {
            return `No se encontró producto con id ${id}`;
        }
    }

}
module.exports = { Stock }