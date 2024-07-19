var express = require('express');

const router = express.Router();

var productController = require('../src/products/productController');

router.route('/product/get').get(productController.getDataController);
router.route('/product/view/:pid').get(productController.viewProductController);

var cartController = require('../src/cart/cartController');
router.route('/product/addCart/:pid').post(cartController.addToCartProductController);
router.route('/product/viewCart').post(cartController.getCartProductListController);
router.route('/product/removeFromCart').post(cartController.removeFromCartController);

var userController = require('../src/user/userController');

router.route('/user/login').post(userController.userLoginController);
router.route('/user/create').post(userController.createUserController);

module.exports = router;

