const express = require('express') ;
const routes  = express.Router();
const products = require('../controllers/products');
const cors = require('cors')


routes.use(cors());


routes.post('/product', products.add);
routes.delete('/product', products.delete);
routes.get('/product', products.get);
routes.get('/products', products.getAll);

module.exports = routes;
