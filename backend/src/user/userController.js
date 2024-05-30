var userService = require('./userService');
var express = require('express');
const router = express.Router();

var createUserController = async (req,res)=>{
    try{
        // console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status":true,"message":"User Created Successfully"});
        }
    }
    catch(err){
        console.log(err);
    }
}


var userLoginController = async (req,res)=>{
    var result = null;

    try{
        result = await userService.loginUserService(req.body);
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


module.exports = {createUserController,userLoginController};