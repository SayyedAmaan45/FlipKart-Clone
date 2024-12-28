let express = require("express");
let router = express.Router();
let userController = require("./controller/user");
let productController = require("./controller/product");
let paymentController = require("./controller/payment")


// router.get("/", (req, res) => {
//     res.send("Hello World This For Testing");
// })

router.post('/signup', userController.userSignUp);
router.post('/login', userController.userLogin);

router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProductDetail);

router.post('/payment', paymentController.addPaymentGateway);
router.post('/status',paymentController.phonePeStatus)


module.exports = router;  