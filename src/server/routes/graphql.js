const express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("graphql", { title: "GraphQL" });
});

module.exports = router;
