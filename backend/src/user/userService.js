var userModel = require('./userModel');
var key = '123456789abcdefghijklmnopqrstuvwxyz';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {

    return new Promise(async function createUser(resolve,reject){

        var userModelData = new userModel();

        userModelData.firstName = userDetails.firstName;
        userModelData.lastName = userDetails.lastName;
        userModelData.email = userDetails.email;
        userModelData.mobileNo = userDetails.mobileNo;
        userModelData.password = userDetails.password;
        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        // userModelData.save(function resultHandle(error,result){
        //     if(error){
        //         reject(false);
        //     } else {
        //         resolve(true);
        //     }
        // })

        try {
            const result = await userModelData.save();
            // console.log("Data",result);
            resolve(result);
          } catch (error) {
            throw error;
          }
        
    })
}

module.exports.loginUserService = (userDetails)=>{
  
  return new Promise(async function getData(resolve,reject){

    var userData = await userModel.findOne({email:userDetails.email});
    // console.log(userData);

    try{
      if(userData !=undefined && userData != null){
        var decryptedPass = encryptor.decrypt(userData.password);
        // console.log(decryptedPass);
        if(decryptedPass == userDetails.password){
          resolve({status:true,msg:"Login Successfully"});
        }
        else{
          reject({status:true,msg:"Invalid Data"});
        }
      } else{
        reject({status:true,msg:"Data Not Found"});
      }
    } catch(error){
      console.log(error);
    }
  })
}
