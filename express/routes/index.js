const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`hello,Express ${req.url}`);
});

module.exports = router;
