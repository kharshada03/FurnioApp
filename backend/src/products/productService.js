
var productModel = require('./productModel');
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

        // productModel.find({});

        // productModel.find({}, function returnData(error, result){

        //     if(error){
        //         reject(false);
        //     } else {
        //         resolve(result);
        //     }
        // });

    //     // var result = await productModel.find({});
    //     // return result.json();
    });

}

module.exports.getProdDetailService = (pid) =>{

  // console.log(pid);

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