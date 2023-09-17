var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth')

/* GET users listing. */
router.get('/', authMiddleware.auth, userController.read);
router.get('/:id', userController.readById);
router.post('/', userController.signup);
router.post('/signin', userController.signin);
router.patch('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
