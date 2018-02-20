var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  todo_text: String
});
console.log("Entered Model")
var todos = module.exports = mongoose.model('todoData', todoSchema);