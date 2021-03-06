const express = require("express");
const router = express.Router();

const cntrl = require("../controllers/index");

// router.get("/", cntrl);
router.get("/", cntrl.compiler);

router.post("/send/request", cntrl.compile);

module.exports = router;
