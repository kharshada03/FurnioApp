
// const cartModel = require('./cartModel');
var cartModel = require('./cartModel');

module.exports.addToCartService = (cartDetails) => {

    return new Promise(async function createCart(resolve,reject){
  
        var productModelData = new cartModel();
  
        productModelData.name = cartDetails.name;
        productModelData.pid = cartDetails.pid;
        productModelData.price = cartDetails.price;
        productModelData.quantity = cartDetails.quantity;
        productModelData.colorStyle = cartDetails.colorStyle;
        productModelData.email = cartDetails.email;
  
        // var localStorage = new LocalStorage();
        // productModelData.email = localStorage.getItem('email');
  
        try {
            const result = await productModelData.save();
            console.log("Data",result);
            resolve(result);
          } catch (error) {
            throw error;
          }
        
    })
  }

  module.exports.getCartProducts = (userDetails) =>{

    return new Promise(async function checkUrl(resolve,reject){
           try {
               const result = await cartModel.find({email:"ron@gmail.com"});
              //  console.log("Data",result);
               resolve(result);
             } catch (error) {
               throw error;
             }
   
       });
   }