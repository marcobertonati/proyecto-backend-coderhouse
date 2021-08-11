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

        const productExist = this.listOfStock.some(product => id == product.id);

        if (productExist) {
            return {exist: true, product: this.listOfStock[id-1]};
        } else {
            return {exist: false, msg: `Producto con id ${id} no existe`}
        }
        
    }

    addProduct = (product) => {
        this.listOfStock.push(product);
        return `Se agregó producto`
    }

    updateProduct = (productToChange) => {

        const productExist = this.listOfStock.some(product => productToChange.id == product.id);

        if(productExist) {
            this.listOfStock[productToChange.id-1].title = productToChange.product.title;
            this.listOfStock[productToChange.id-1].price = productToChange.product.price;
            this.listOfStock[productToChange.id-1].thumbnail = productToChange.product.thumbnail;
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