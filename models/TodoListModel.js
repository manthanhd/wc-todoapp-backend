/**
 * Created by manthanhd on 09/10/2016.
 */
function TodoListModel(mongoose) {
    var schema = mongoose.Schema({
        name: String,
        description: String,
        createdOn: {type: Date, default: function() {return new Date()}}
    });

    return mongoose.model('todolist', schema, 'todolist');
}

module.exports = TodoListModel;