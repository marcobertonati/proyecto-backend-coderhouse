class Cart {

    cartContent = [];
    idOnCart = 1;

    showDataCart = () => {
        console.log(this.id);
        console.log(this.timestamp);
        console.log(this.cartContent);
        return { id: this.id, timestamp: this.timestamp, products: this.cartContent}
    }

    showCart = (id) => {
        
        if(id === undefined) {

            /*Chequea si viene con ID. Si no viene con ID muestra todo el carrito */
            if (this.cartContent.length === 0) {
                console.log('No hay productos en el carrito')
                return `No hay productos en el carrito`;
            }
            return this.cartContent;
        } else {
            /*Si viene con ID chequea que exista ese ID*/
            const productToFind = this.cartContent.findIndex((productToFind) => productToFind.product.id == id);

            if (productToFind != -1) {

                const productFinded = this.cartContent.find((productFind) => productFind.product.id == id);
    
                return productFinded;

            } else {
                return `No hay producto con id ${id} en el carrito`
            }

        }
    }

    addToCart = (product, id) => {        
        const newProduct = {
            id: id+1,
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