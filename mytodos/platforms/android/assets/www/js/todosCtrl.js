app.controller('TodosCtrl', function($scope, $state, todoService, $ionicActionSheet, $ionicListDelegate){
  console.log("todo", $scope.todo);
  $scope.todoObj = {};
  $scope.todosArray = [];
  $scope.showTodos = false
  $scope.saveToDo = function (){
    console.log("todo when clicked!!", $scope.todo);
    $scope.todoObj.text = $scope.todo
    todoService.add($scope.todoObj).then(function(result){
      $scope.getTodo();
      $scope.todo = '';
    });
  };
  $scope.refreshTodoArray = function(){
    $scope.todosArray.forEach(function(todo){
      console.log("hello")
      return todo.isEdit = false;
    })
    $ionicListDelegate.closeOptionButtons();
  };
  $scope.editRow = function(){
    $ionicListDelegate.closeOptionButtons();
  };
  $scope.getTodo = function (){
    $scope.todoData = todoService.get()
    $scope.todoData.then(function(response){
      console.log("data", response.data)
      $scope.todosArray = response.data
      $scope.refreshTodoArray()
      console.log($scope.todosArray)
      $scope.showTodos = true;
    })
  };
  $scope.hideTodo = function(){
    $scope.showTodos = false;
  };
  $scope.saveEdit = function(todo){
    console.log("saved edited row...");
    $scope.todoData = todoService.update(todo)
    $scope.todoData.then(function(response){
      $ionicActionSheet.show({titleText:'Updated Successfully',cancelText: 'Ok',});
      $scope.refreshTodoArray()
    });
  };
  $scope.deleteTodo = function(todoId){
    console.log("delete id", todoId);
    $ionicActionSheet.show({
      destructiveText: 'Remove Todo',
      titleText: 'Are You Sure?',
      cancelText: 'Cancel',
      destructiveButtonClicked: function(){
        $scope.deletedTodo = todoService.delete(todoId)
        $scope.deletedTodo.then(function(response){
          console.log(response);
          $scope.getTodo();
          $ionicActionSheet.show({titleText:'Deleted Successfully',cancelText: 'Ok',});
        });
        return true;
      }
    });
  };
})
