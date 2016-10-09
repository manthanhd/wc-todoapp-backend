/**
 * Created by manthanhd on 09/10/2016.
 */
function TodoListService(todoListModel) {
    this.save = function SaveTodoList(name, description, callback) {
        var newTodoList = new todoListModel();
        newTodoList.name = name;
        newTodoList.description = description;
        newTodoList.save(function(err, savedTodoList) {
            if(err) {
                console.error(err);
                return callback(err);
            }

            return callback(undefined, savedTodoList);
        });
    };

    this.findAll = function FindAllTodoLists(callback) {
        return todoListModel.find({}, callback);
    };

    this.findById = function FindTodoListsById(id, callback) {
        return todoListModel.findById(id, callback);
    };

    this.deleteById = function DeleteTodoListById(id, callback) {
        return todoListModel.findById(id, function(err, foundTodoList) {
            if(err) {
                console.error(err);
                return callback(err);
            }

            return foundTodoList.remove(function(err) {
                return callback(err);
            });
        });
    };

    return this;
}

module.exports = TodoListService;