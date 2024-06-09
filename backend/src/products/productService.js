
var productModel = require('./productModel');
const LocalStorage = require('node-localstorage');
// console.log(productModel);


module.exports.getDataFromDBService = () =>{


 return new Promise(async function checkUrl(resolve,reject){

        try {
            const result = await productModel.find({});
            // console.log("Data",result);
            resolve(result);
          } catch (error) {
            throw error;
          }

    });

}

module.exports.getProdDetailService = (pid) =>{

  return new Promise(async function checkUrl(resolve,reject){
 
         try {
             const result = await productModel.find({"pid":pid});
            //  console.log("Data",result);
             resolve(result);
           } catch (error) {
             throw error;
           }
 
     });
 }