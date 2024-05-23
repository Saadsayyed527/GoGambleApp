const express = require('express');
const { registerUser, playGame } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/play', playGame);

module.exports = router;
