var orderModel = require('./orderModel');

module.exports.orderService = (orderDetails) => {

    return new Promise(async function createCart(resolve,reject){
  
        var orderModelData = new orderModel();
  
        orderModelData.name = orderDetails.name;
        orderModelData.pid = orderDetails.pid;
        orderModelData.price = orderDetails.price;
        orderModelData.quantity = orderDetails.quantity;
        orderModelData.colorStyle = orderDetails.colorStyle;
        orderModelData.email = orderDetails.email;
  
        try {
            const result = await orderModelData.save();
            console.log("Data",result);
            resolve(result);
          } catch (error) {
            throw error;
          }
        
    })
  }
