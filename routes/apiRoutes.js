const path = require('path');
let todoData = require('../data/todo');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(todoData));

    app.post("/api/notes", (req, res) => {
        let data = req.body;
        data.id = todoData.length + 1;
        todoData.push(data);
        res.json(todoData);
    });

    app.delete("/api/notes/:id", (req,res) => {
        const targetId = req.params.id;
        for (i=0;i<todoData.length;i++) {
            if (todoData[i].id == targetId) {
                todoData.splice(i,1);
            };
        };
        res.json(todoData);
    });
};