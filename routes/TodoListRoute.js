/**
 * Created by manthanhd on 09/10/2016.
 */
function TodoListRoute(express, stubTodoListModel, todoListService) {
    var router = express.Router();

    router.post('/', function(req, res) {
        var name = req.body.name;
        var description = req.body.description;

        var todoList = new stubTodoListModel(name, description);
        return todoListService.save(todoList, function(err, savedTodoList) {
            if(err) {
                console.error(err);
                return res.status(500).send();
            }

            return res.status(201).send(savedTodoList);
        });
    });

    return router;
}

module.exports = TodoListRoute;