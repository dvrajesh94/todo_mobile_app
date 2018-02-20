app.factory('todoService', function($http){
  todoData = {};
  todoData.get = function(){
    console.log("getting all....")
    return $http.get('http://192.168.0.107:4000/api/getTodos');
  }

  todoData.update = function(todo){
    console.log('todo', todo);
    return $http.post('http://192.168.0.107:4000/api/updateTodo', todo);
  }

  todoData.add = function(todo){
    console.log('todo', todo);
    return $http.post('http://192.168.0.107:4000/api/addTodo', todo);
  }

  todoData.getOne = function(todoId){
    console.log("todoId", todoId)
//    return $http.getOne('http://localhost:4000/api/addTodo'+ todoId);
  }

  todoData.delete = function(todoId){
    console.log("todoId", todoId);
    return $http.delete('http://192.168.0.107:4000/api/deleteTodo/'+ todoId);
  }
  return todoData;
});
