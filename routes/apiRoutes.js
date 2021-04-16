const allNotes = require("../db/notes");
let id = 1;

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        allNotes.getAll()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            return res.status(500).end();
        });
    });

    app.post("/api/notes", (req, res) => {
        let data = req.body;
        data.id = id;
        id += 1;

        allNotes.getAll()
        .then(() => allNotes.push(data))
        .then(response => res.json(response))
        .catch(err => {
            console.log(err);
            return res.status(500).end();
        });
    });

    app.delete("/api/notes/:id", (req,res) => {
        const targetId = req.params.id;
        allNotes.getAll()
        .then(notesData => {
            for (i=0;i<notesData.length;i++) {
                if (notesData[i].id == targetId) {
                    notesData.splice(i,1);
                };
            };
            allNotes.write(notesData);
        })
        .then(response => res.json(response))
        .catch(err => {
            console.log(err);
            return res.status(500).end();
        });
    });
};