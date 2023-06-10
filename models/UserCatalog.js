const mongoose = require('mongoose');
const { Schema } = mongoose;

const userCatalogSchema = new Schema({
    userId:     { type:String,  require: true },
    userName:   { type:String,  require: true },
    date:       { type:String,  require: true },
    punchIn:    { type:String,  require: true },
    punchOut:   { type:String,  require: true },
});

const User = mongoose.model('UserCatalog', userCatalogSchema);

module.exports = User;