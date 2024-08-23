var orderService = require('./orderService');
var express = require('express');
const router = express.Router();

var buyController = async (req,res)=>{
    var result = null;

    try{
        result = await orderService.orderService(req.body);
        if(result.status){
            res.send({"status":true,"message":result.msg});
        } 
        else {
            res.send({"status":false,"message":result.msg});
        }
    } catch(error){
        console.log(error);
        res.send({"status":false,"message":error.msg});
    }
}

module.exports = {buyController};