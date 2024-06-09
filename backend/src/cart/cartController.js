
var productSevice = require('./cartService');
var express = require('express');
const router = express.Router();

var addToCartProductController = async(req,res)=>{
    // console.log(req.params.pid);
    
    try {
        var prodDetails = await productSevice.addToCartService(req.body);
        // console.log(prodDetails);
        res.send({ "status": true, "data": prodDetails });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

module.exports = {addToCartProductController};