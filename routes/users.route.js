const Router = require('router');
const router = Router();

// controller
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//middleware
const authMiddleware = require('../middleware/auth.middleware');

router.post('/login', authController.login);
router.post('/register', authController.register); 
router.post('/checkUsername', authController.checkUsername); 

router.post('/update', authMiddleware.auth, userController.update);

router.get('/', authMiddleware.auth, userController.getUserData);
router.post('/updatePass', authMiddleware.auth, userController.updatePass);
module.exports = router;