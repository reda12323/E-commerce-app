const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer.js'); // Import multer configuration

router.get('/', productController.getProducts);
router.get('/view/:id', productController.getProductById);
router.get('/add', productController.createProduct);
router.post('/store', upload, productController.storeProduct);
router.get('/edit/:id', productController.editProduct);
router.post('/update/:id', upload, productController.updateProduct);
router.get('/delete/:id', productController.deleteProduct);
router.post('/destroy/:id', productController.destroyProduct);
router.post('/deleteAll', productController.deleteAll); 
router.get('/categories/:categ', productController.filterByCategory);

module.exports = router;