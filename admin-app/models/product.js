const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  img: { type: String, required: true }, // Main image (required)
  img2: { type: String, required: false }, // Additional image 1 (optional)
  img3: { type: String, required: false }, // Additional image 2 (optional)
  img4: { type: String, required: false }, // Additional image 3 (optional)
  img5: { type: String, required: false }, // Additional image 4 (optional)
  title: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: false },
  availability: { type: Boolean, required: true },
  details: { type: String, required: true },
  category: { type: String, required: true },
  popularity: { type: Number, default: 0 },
  isPromo: { type: Boolean, default: false },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
