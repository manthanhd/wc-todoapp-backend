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

    this.deleteById = function DeleteTodoListById(id, callback) {
        if(todoLists.length == 0) {
            return callback(new Error("Nothing to delete. Todo lists empty."));
        }

        for(var i = 0; i < todoLists.length; i++) {
            var todoList = todoLists[i];
            if(todoList.id === id) {
                todoLists.splice(i, 1);
                return callback(undefined, undefined);
            }
        }

        return callback(new Error("Nothing to delete. ID not found"));
    };

    return this;
}

module.exports = TodoListService;