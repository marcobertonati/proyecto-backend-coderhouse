class Cart {

    cartContent = [];
    idOnCart = 1;

    constructor() {
        // this.id = Cart.idCart++,
        // this.timestamp = Date.now(),
        // this.cartContent = []
    }

     

    showDataCart = () => {
        console.log(this.id);
        console.log(this.timestamp);
        console.log(this.cartContent);
        return { id: this.id, timestamp: this.timestamp, products: this.cartContent}
    }

    showCart = (id) => {
        if(id === undefined) {
            return this.cartContent;
        } else {
            return this.cartContent[id-1]
        }
    }

    addToCart = (product) => {

        console.log(product);
        
        const newProduct = {
            id: this.idOnCart++,
            timestampCart: Date.now(),
            product: {...product}
        }
        this.cartContent.push(newProduct)
    }

    deleteProduct = (id) => {

        const productExist = this.cartContent.some(product => id == product.id);

        if (productExist) {

            const newCart = this.cartContent.filter(product => product.id != id);

            this.cartContent = newCart;

            return {exist: true, msg: `Se encontró producto para borrar`}

            } else {
            return {exist: false, msg: `No existe producto con id ${id} en su carrito`}
        }

    }

}
module.exports = { Cart }