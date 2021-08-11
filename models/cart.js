class Cart {

    cartContent = [];

    constructor(cart) {
        this.cart = cart;
    
    }

    showCart = (id) => {
        if(id === undefined) {
            return this.cartContent;
        } else {
            return this.cartContent[id-1]
        }
    }

    addToCart = (product) => {
        this.cartContent.push(product)
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