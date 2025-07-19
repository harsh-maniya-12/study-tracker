const express = require("express");
const router = express.Router();
const { addSession, getAllSessions } = require("../controllers/sessionController");

router.post("/", addSession);
router.get("/", getAllSessions);

module.exports = router;
