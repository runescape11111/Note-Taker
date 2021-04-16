const path = require('path');
const todoData = require('../data/todo');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(todoData));

    app.post("/api/notes", (req, res) => {
        let data = req.body;
        data.id = todoData.length + 1;
        todoData.push(data);
        res.json(todoData);
    });
};