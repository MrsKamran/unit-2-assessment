var express = require("express");
const todo = require("../data/todo");
var router = express.Router();
var todosDB = require("../data/todo.js");
var todos = todosDB.todos;
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Unit 2 Assessment", todos });
});

router.post("/", function (req, res, next) {
  var newTodo = req.body;
  newTodo.done = false;
  newTodo.id = Date.now() % 1000000;
  todos.push(newTodo);
  res.redirect("/");
});
router.delete("/:id", function (req, res) {
  const idx = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  todos.splice(idx, 1);
  res.redirect("/");
});

module.exports = router;
