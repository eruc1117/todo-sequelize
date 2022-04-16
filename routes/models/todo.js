const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  const name = {
    name: req.body.name,
    UserId: req.user.id,
    updatedAt: new Date(),
    createdAt: new Date()
  }
  return Todo.create(name)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then((todo) => res.render('edit', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.put('/:id/edit', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  return Todo.update({ name }, {
    where: {
      id
    }
  })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router