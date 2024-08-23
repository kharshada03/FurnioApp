
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    oid:{
        type: Number,
        require: true
    },
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
        type:Number,
        require:true
    },
    total:{
        type:Number,
        require:true
    },
    deliveryAddress:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('orders', cartSchema);