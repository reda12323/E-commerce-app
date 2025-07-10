const express = require('express');
const Product = require('../models/product');

const router = express.Router();


// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithImageUrls = products.map(product => {
      let imageUrl = product.img; 
      if (product.img && product.img.startsWith('/uploads')) {
        imageUrl = `${req.protocol}://${req.get('host')}${product.img}`;
      }
      return {
        ...product._doc,
        img: imageUrl,
      };
    });
    res.json(productsWithImageUrls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get a single product by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
    
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

   
//     let imageUrl = product.img;
//     if (product.img && product.img.startsWith('/uploads')) {
//       imageUrl = `${req.protocol}://${req.get('host')}${product.img}`;
//     }

    
//     res.json({ ...product._doc, img: imageUrl });

//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching product', error });
//   }
// });


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Function to format image URL
    const formatImageUrl = (imagePath) => {
      if (imagePath && imagePath.startsWith('/uploads')) {
        return `${req.protocol}://${req.get('host')}${imagePath}`;
      }
      return imagePath;
    };

    // Format all image URLs
    const formattedProduct = {
      ...product._doc,
      img: formatImageUrl(product.img),
      img2: formatImageUrl(product.img2),
      img3: formatImageUrl(product.img3),
      img4: formatImageUrl(product.img4),
      img5: formatImageUrl(product.img5),
    };

    // Send modified product data
    res.json(formattedProduct);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category;

    // Fetch all products that match the category
    const products = await Product.find({ category });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found in this category' });
    }

    // Function to format image URL
    const formatImageUrl = (imagePath) => {
      if (imagePath && imagePath.startsWith('/uploads')) {
        return `${req.protocol}://${req.get('host')}${imagePath}`;
      }
      return imagePath;
    };

    // Format all image URLs for each product
    const formattedProducts = products.map(product => ({
      ...product._doc,
      img: formatImageUrl(product.img),
      img2: formatImageUrl(product.img2),
      img3: formatImageUrl(product.img3),
      img4: formatImageUrl(product.img4),
      img5: formatImageUrl(product.img5),
    }));

    // Send modified product data
    res.json(formattedProducts);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching products by category', error });
  }
});

router.post('/purchase', async (req, res) => {
  const { items } = req.body; // items: [{id, quantity}]

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Invalid purchase data' });
  }

  try {
    for (const item of items) {
      const product = await Product.findById(item.id);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.id}` });
      }

      if (product.quantity < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for product ${product.title}` });
      }

      product.quantity -= item.quantity;
      await product.save();

      
    }

    return res.status(200).json({ message: 'Purchase successful' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;