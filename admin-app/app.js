const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const fs = require('fs'); // Add this line
const path = require('path');
const methodOverride = require('method-override');
const frontendRoutes = require('./routes/frontendRoutes');


dotenv.config();

const app = express();
app.use(methodOverride('_method'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const uploadDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created directory: ${uploadDir}`);
}


//Front-End Api
app.use('/api/products', frontendRoutes);


// EJS Configuration
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout'); // Set the default layout

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const productRoutes = require('./routes/productRoutes');
const productController = require('./controllers/productController');

app.get('/', productController.getProducts);
app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
