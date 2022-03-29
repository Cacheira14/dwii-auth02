const userauth = require("../middlewares/auth");
const protectedController = require("../controllers/protected-controller");
const express = require("express");
const router = express.Router();
const list = require("../controllers/protected-controller")

router.get("/protected", protectedController.list);

router.post("/protected", protectedController.list);

