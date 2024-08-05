const express =  require ("express");
const router = express.Router();
const dashboardcontroller = require('../controllers/dashboardcontroller.js');

// Create a new product
router.post('/products', dashboardcontroller.createProduct);

// Retrieve all products
router.get('/products', dashboardcontroller.getProducts);

// Retrieve a single product
// router.get('/products/:id', dashboardcontroller.getOneProduct);

// Update a product
router.put('/products/:id', dashboardcontroller.updateProduct);

// Delete a product
router.delete('/products/:id', dashboardcontroller.deleteProduct);

// Delete all products
router.delete('/products', dashboardcontroller.deleteAllProducts);

// Find products by condition
router.post('/products/search', dashboardcontroller.findProductsByCondition);

module.exports = router