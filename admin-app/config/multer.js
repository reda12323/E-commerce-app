const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Save files to 'public/uploads'
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  }
});

// Initialize upload
const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb('Error: Only images (jpeg, jpg, png, gif) are allowed!');
    }
  }
}).fields([
  { name: 'img', maxCount: 1 }, // Main image
  { name: 'img2', maxCount: 1 }, // Additional image 1
  { name: 'img3', maxCount: 1 }, // Additional image 2
  { name: 'img4', maxCount: 1 }, // Additional image 3
  { name: 'img5', maxCount: 1 }  // Additional image 4
]);

module.exports = upload;