
var mongoose = require('mongoose');
// return mongoose;
var Schema = mongoose.Schema;

var productSchema = new Schema({
    pid:{
        type: Number,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('products', productSchema);