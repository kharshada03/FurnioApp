
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
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
    },
    image:{
        type: String,
        require: true
    },
    colorStyle:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    quantity:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('cart', cartSchema);