const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
  res.send(`hello,user`);
});
router.get("/info", (req, res) => {
  res.send(`hello,user info`);
});

router.get("/:id", (req, res) => {
  res.send(`hello,user ${req.params.id} `);
});

router
  .route("/abc")
  .get((req, res) => {
    res.send("GET /abc");
  })
  .post((req, res) => {
    res.send("post/abc");
  });
//이부분을 기준으로 위의 한개의 router코드와 아래의 두개의 router코드는 같은 의미이다.
router.get("/abc", (req, res) => {
  res.send("GET /abc");
});
router.post("/abc", (req, res) => {
  res.send("GET/abc");
});

module.exports = router;
