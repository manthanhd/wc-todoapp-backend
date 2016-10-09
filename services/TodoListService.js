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

    return this;
}

module.exports = TodoListService;