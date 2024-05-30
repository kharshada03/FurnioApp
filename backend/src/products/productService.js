
var productModel = require('./productModel');
// console.log(productModel);


module.exports.getDataFromDBService = () =>{

    // try {
    //     const result = await productModel.find({});
    //     console.log("Data",result);
    //     return result;
    //   } catch (error) {
    //     throw error;
    //   }

 return new Promise(async function checkUrl(resolve,reject){

        try {
            const result = await productModel.find({});
            console.log("Data",result);
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


//     // return async function fetchDataAsync() {
//     //     try {
//     //     //   const response = await fetch('/endpoint');
//     //       const summary = await productModel.find({});
//     //       return summary;
//     //     } catch (error) {
//     //       console.log('Error:' + error.message);
//     //     }
//     //   }
}