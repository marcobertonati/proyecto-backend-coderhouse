/*-----REQUIERES & IMPORTS-----/

/*-----Express------*/
/*Creo servidor */
const express = require("express");
/*Inicializamos express */
const app = express();
/*Router */
const routerProducts = express.Router();
const routerCart = express.Router();
/*CORS */
const cors = require('cors')
app.use(cors());


/*Importo modelos de productos, carrito y stock*/
const { Products } = require("./models/products");
const { Cart } = require('./models/cart');
const cart = new Cart;
const { Stock } = require('./models/stock');
const stock = new Stock;


/* Requiero FS: FileSystem: para manejo de archivos */
const fs = require('fs');

/*Body Parser: ya no es necesario */
const bodyParser = require("body-parser");

/*Compression: sirve para que el req.body pese menos*/
const compression = require ('compression');

/*----MIDDLEWARES----*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(compression());
app.use('/products', routerProducts);
app.use('/cart', routerCart);



/*----BOLLEAN ADMIN----*/
const admin = true;
// const admin = false;



/*------RUTAS STOCK-------*/
/*Consulta lista de productos en el stock */
routerProducts.get('/list/:id?', (req, res) => {
    const productsStock = stock.showStock(req.params.id);
    res.json(productsStock);
});

/*Agregar producto al stock */
routerProducts.post('/add', (req, res) => {

    if (admin) {

        const newProduct = new Products(title = req.body.title, price= req.body.price, thumbnail= req.body.thumbnail, id = stock.listOfStock.length+1, description = req.body.description, code = req.body.code, stocked = req.body.stocked);
    
        const productAdd = stock.addProduct(newProduct);
        res.json(productAdd);

    } else {
        res.json({error: -1, descripción: `ruta /products/add método "POST" no autorizada`});
    }
});

/*Modificar producto al stock */
routerProducts.put('/update/:id', (req,res) => {

    if (admin) {

        const productUpload = stock.updateProduct({id: req.params.id, product: req.body})
        res.json(productUpload);

    } else {
        res.json({error: -1, descripción: `ruta /products/update método "PUT" no autorizada`});
    }

})

/*Eliminar producto al stock */
routerProducts.delete('/delete/:id', (req, res) => {

    if (admin) {
        
        const productDeleted = stock.deleteProduct(req.params.id);
        res.json(productDeleted);

    } else {
        res.json({error: -1, descripción: `ruta /products/delete método "DELETE" no autorizada`});
    }
})


/*------RUTAS CARRITO-------*/
/*Consulta lista de productos en carrito */
routerCart.get('/list/:id?', (req, res) => {
    const productsOnCart = cart.showCart(req.params.id);
    res.json(productsOnCart);
});

/*Agregar producto a carrito */
routerCart.post('/add/:id_producto', (req, res) => {

    const productFinded = stock.showProductOfStock(req.params.id_producto);

    if (productFinded.exist) {
        cart.addToCart(productFinded.product);
        res.json(productFinded.product);
    } else {
        res.json(productFinded.msg)
    }
});

/*Borrar producto a carrito */
routerCart.delete('/delete/:id', (req,res) =>{

    const productDeleted = cart.deleteProduct(req.params.id);
    res.json(productDeleted)
})


/*-------------------*/
/*Ejecución de servidor*/
const PORT = 8080;
app.listen(8080, () => console.log(`Servidor iniciado en puerto ${PORT}`));