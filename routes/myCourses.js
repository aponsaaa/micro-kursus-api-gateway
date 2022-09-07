const express = require("express");
const router = express.Router();

const myCoursesHandler = require("./handler/my-courses");

/* GET users listing. */
router.get("/", myCoursesHandler.get);
router.post("/", myCoursesHandler.create);

module.exports = router;
