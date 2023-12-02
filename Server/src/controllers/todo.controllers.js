const { param } = require('../Routes/todo.Routes');
const Todo = require('../models/todo.models');

postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added Successfully", data }))
        .catch((err) => {
            res.status(400).json({ message: "Failed to add todo", error: err.message })
        })
}


getAllTodo = (req, res) => {
    Todo.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(404).json({ message: 'todo not found', err }))
}

getOneTodo = (req, res) => {
    const id = req.params.id
    Todo.findOne({ _id: id })
        .then((data) => res.json({ message: "Data is found", data }))
        .catch((err) => res.status(404).json({ message: 'Todo not found' }))
}

updateTodo = (req, res) => {
    const id = req.params.id
    Todo.findByIdAndUpdate(id, req.body)
        .then((data) => {
            if (data) {
                res.json({ message: 'Data is updated', data });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        })
        .catch((err) => res.status(500).json({ message: 'Internal Server Error', err }));
}

deleteTodo = (req, res) => {
    const id = req.params.id
    // console.log(id);
    Todo.findOneAndDelete({ _id: id })
        .then((data) => {
            if (data) {
                res.json({ message: 'Data is deleted', data });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        })
        .catch((err) => res.status(500).json({ message: 'Internal Server Error', err }));
}



module.exports = { postCreateTodo, getAllTodo, getOneTodo, updateTodo, deleteTodo }