var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();

var Todo = require('./model/todoModel');

router.get('/', function(req,res){
    console.log("server is running");
})

router.get('/getTodos', function(req,res,next){
    "use strict";
    console.log('getting the order!!', req.body);
    Todo.find(function (err, todo) {
        if (err){
            console.log(err);
        }
        else{
            console.log('rajesh', todo);
            res.json(todo);
        }
    })
});

router.post('/addTodo', function(req, res, next){
	"use strict";
	console.log('postng or not?', req.body);
	let newTodo = new Todo({
	    todo_text: req.body.text
	});

	newTodo.save(function(err, todo){
		if(err){
			res.status(200).json({msg:"failed to add todo"/**/});
		}
		else{
			res.json(todo);
			console.log('req.body', req.body);
		}
	})
});

router.delete('/deleteTodo/:id', function(req, res, next){
    console.log("req", req.params);
	Todo.remove({_id: req.params.id}, function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
			console.log("result", result);
		}
	})
});

router.post('/updateTodo', function(req, res, next){
    console.log("req update", req)
    Todo.update({_id: req.body._id}, req.body, function(err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
});


module.exports = router;