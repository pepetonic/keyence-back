const multer = require('multer');
const config = require('config');
const fs = require('fs');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = config.get('uploadPath');
    // Verificar si el directorio existe
    if (!fs.existsSync(uploadPath)) {
      // Crear el directorio si no existe
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;