const express = require('express')
const shortid = require("shortid")

const port = 5000
const server = express()
server.listen(port, () => console.log('server is runing...'))
server.use(express.json())

const users = [
    {id:1, name:'Sam1', bio:'I am 1 Good'},
    {id:2, name:'Sam2', bio:'I am 2 Good'},
    {id:3, name:'Sam3', bio:'I am 3 Good'},
    {id:4, name:'Sam4', bio:'I am 4 Good'},
    {id:5, name:'Sam5', bio:'I am 5 Good'},
    {id:6, name:'Sam6', bio:'I am 6 Good'},
]

server.get('/', (req, res) => {
    res.status(200).json({greeting: 'success'})
})

server.get('/api/users', (req, res) => {
    res.status(200).json({data: users})
})

server.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    res.status(200).json(
        users.find(user => user.id === id)
    )
})

server.post('/api/users', (req, res) => {
    const newUser = req.body
    newUser.id = shortid.generate()
    //console.log(req.body)
    users.push(newUser)
    res.status(201).json({data: users})
})

