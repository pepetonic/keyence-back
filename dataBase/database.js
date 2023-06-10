const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        const urlDB = `mongodb://${config.get('dbConfig.host')}:${config.get('dbConfig.port')}/${config.get('dbConfig.dbName')}`;
        await mongoose.connect(urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
  };
  
  module.exports = connectDB;