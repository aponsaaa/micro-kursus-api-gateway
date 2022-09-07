const express = require("express");
const router = express.Router();

const webhookHandler = require("./handler/webhook");

const verifyToken = require("../middlewares/verifyToken");

router.post("/", webhookHandler.webhook);

module.exports = router;
