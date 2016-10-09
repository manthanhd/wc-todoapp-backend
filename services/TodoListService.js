/**
 * Created by manthanhd on 09/10/2016.
 */
function TodoListService(hat) {
    var todoLists = [];
    this.save = function SaveTodoList(todoList, callback) {
        todoList.id = hat();
        todoLists.push(todoList);
        console.info(todoLists);
        return callback(undefined, todoList);
    };

    this.findAll = function FindAllTodoLists(callback) {
        return callback(undefined, todoLists);
    };

    this.findById = function FindTodoListsById(id, callback) {
        for(var i = 0; i < todoLists.length; i++) {
            var todoList = todoLists[i];
            if(todoList.id === id) {
                return callback(undefined, todoList);
            }
        }

        return callback(undefined, undefined);
    };

    return this;
}

module.exports = TodoListService;