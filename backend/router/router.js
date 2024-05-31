var express = require('express');

const router = express.Router();

var productController = require('../src/products/productController');

router.route('/product/get').get(productController.getDataController);
router.route('/product/view/:pid').get(productController.viewProductController)

var userController = require('../src/user/userController');

router.route('/user/login').post(userController.userLoginController);
router.route('/user/create').post(userController.createUserController);

module.exports = router;

