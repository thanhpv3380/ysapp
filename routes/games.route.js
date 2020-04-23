const Router = require('router');
const router = Router();

// controller
const gamesController = require('../controllers/games.controller');

//middleware
const authMiddleware = require('../middleware/auth.middleware');

router.get('/englishmc', authMiddleware.auth, gamesController.getDataEnglishMC);

module.exports = router;