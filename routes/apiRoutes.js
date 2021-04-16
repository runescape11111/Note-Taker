const path = require('path');
let notesData = require('../data/notes');
let id = 1;

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(notesData));

    app.post("/api/notes", (req, res) => {
        let data = req.body;
        data.id = id;
        id += 1;
        notesData.push(data);
        res.json(notesData);
    });

    app.delete("/api/notes/:id", (req,res) => {
        const targetId = req.params.id;
        for (i=0;i<notesData.length;i++) {
            if (notesData[i].id == targetId) {
                notesData.splice(i,1);
            };
        };
        res.json(notesData);
    });
};