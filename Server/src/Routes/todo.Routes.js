const express = require('express');
const router = express.Router();

const { postCreateTodo, getAllTodo, getOneTodo, updateTodo, deleteTodo } = require('../controllers/todo.controllers')


router.get('/', getAllTodo);
router.get('/:id', getOneTodo);
router.post('/', postCreateTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);


module.exports = router