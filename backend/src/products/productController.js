
var productSevice = require('./productService');
var express = require('express');
const router = express.Router();

var getDataController = async(req,res)=>{
    try {
        var prodDetails = await productSevice.getDataFromDBService();
        // console.log(prodDetails);
        res.send({ "status": true, "data": prodDetails });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

var viewProductController = async(req,res)=>{
    console.log(req.params.pid);
    
    try {
        var prodDetails = await productSevice.getProdDetailService(req.params.pid);
        // console.log(prodDetails);
        res.send({ "status": true, "data": prodDetails });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
}

module.exports = {getDataController,viewProductController};