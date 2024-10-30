const express = require("express");
const router = express.Router();
const AuthController = require('../controller/AuthenticationController');

router.post("/Register", AuthController.Register);
router.post("/Login", AuthController.Login);
// router.post("/RegisterAdmin", AuthController.createGymAdmin);
// router.post("/RegisterMember", AuthController.createMembers);
// Express route to get session data




module.exports = router;

