const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products/index', { products });
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.render('products/view', { product });
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
};

// Show add product form
exports.createProduct = (req, res) => {
  res.render('products/add');
};

// Add a new product
exports.storeProduct = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log the request body
    console.log('Uploaded files:', req.files); // Log the uploaded files

    const imgPath = req.files?.img ? `/uploads/${req.files.img[0].filename}` : '';
    const img2Path = req.files?.img2 ? `/uploads/${req.files.img2[0].filename}` : '';
    const img3Path = req.files?.img3 ? `/uploads/${req.files.img3[0].filename}` : '';
    const img4Path = req.files?.img4 ? `/uploads/${req.files.img4[0].filename}` : '';
    const img5Path = req.files?.img5 ? `/uploads/${req.files.img5[0].filename}` : '';

    req.body.availability = req.body.availability === 'true';
    req.body.isPromo = req.body.isPromo === 'true';

    const product = new Product({
      ...req.body,
      img: imgPath,
      img2: img2Path,
      img3: img3Path,
      img4: img4Path,
      img5: img5Path,
    });

    await product.save();
    res.redirect('/products');
  } catch (error) {
    console.error('Error adding product:', error); // Log the full error
    res.status(500).send('Error adding product');
  }
};

// Show edit product form
exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.render('products/edit', { product });
  } catch (error) {
    res.status(500).send('Error fetching product for editing');
  }
};

// Update a product
/*exports.updateProduct = async (req, res) => {
  try {
    // Handle file upload
    const imgPath = req.files?.img ? `/uploads/${req.files.img[0].filename}` : '';
    const img2Path = req.files['img2'] ? `/uploads/${req.files['img2'][0].filename}` : req.body.existingImg2;
    const img3Path = req.files['img3'] ? `/uploads/${req.files['img3'][0].filename}` : req.body.existingImg3;
    const img4Path = req.files['img4'] ? `/uploads/${req.files['img4'][0].filename}` : req.body.existingImg4;
    const img5Path = req.files['img5'] ? `/uploads/${req.files['img5'][0].filename}` : req.body.existingImg5;

    // Prepare the update object
    const updateData = {
      title: req.body.title,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      availability: req.body.availability === 'true',
      details: req.body.details,
      category: req.body.category,
      popularity: req.body.popularity,
      isPromo: req.body.isPromo === 'true',
      quantity: req.body.quantity,
      img: imgPath,
      img2: img2Path, 
      img3: img3Path,
      img4: img4Path,
      img5: img5Path,
    };

    // Update the product
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData, // Pass the update object
      { new: true } // Return the updated document
    );

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.redirect('/products');
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Error updating product');
  }
};
*/

exports.updateProduct = async (req, res) => {
  try {
    // Handle file upload
    const imgPath = req.files?.img ? `/uploads/${req.files.img[0].filename}` : req.body.existingImg;
    const img2Path = req.files['img2'] ? `/uploads/${req.files['img2'][0].filename}` : req.body.existingImg2;
    const img3Path = req.files['img3'] ? `/uploads/${req.files['img3'][0].filename}` : req.body.existingImg3;
    const img4Path = req.files['img4'] ? `/uploads/${req.files['img4'][0].filename}` : req.body.existingImg4;
    const img5Path = req.files['img5'] ? `/uploads/${req.files['img5'][0].filename}` : req.body.existingImg5;

    // Prepare the update object
    const updateData = {
      title: req.body.title,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      availability: req.body.availability === 'true',
      details: req.body.details,
      category: req.body.category,
      popularity: req.body.popularity,
      isPromo: req.body.isPromo === 'true',
      quantity: req.body.quantity,
      img: imgPath, // Use the existing image if no new image is uploaded
      img2: img2Path,
      img3: img3Path,
      img4: img4Path,
      img5: img5Path,
    };

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } 
    );

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.redirect('/products');
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Error updating product');
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('products/delete', { product }); // Render the delete confirmation page
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send('Error fetching product');
  }
};

exports.destroyProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products'); 
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Error deleting product');
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const { ids } = req.body; 

    await Product.deleteMany({ _id: { $in: ids } });

    res.json({ success: true, message: 'Products deleted successfully' });
  } catch (error) {
    console.error('Error deleting products:', error);
    res.status(500).json({ success: false, message: 'Failed to delete products' });
  }
};

exports.filterByCategory = async (req, res) => {
  try {
    const { categ } = req.params; 
    const filteredProducts = await Product.find({ category: categ });
    res.render('products/category', { products: filteredProducts, category: categ });

  } catch (error) {
    res.status(500).send('Error fitching product');
  }
};
