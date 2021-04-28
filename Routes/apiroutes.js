const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const createId = require('../utils/createId.js')



router.route('/notes') 
    .get ((req, res) => {
        // path.join(__dirname, '../db/db.json')
        fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) =>{
            if (err) {
                console.log(err);
                res.status(404).send('Something went wrong')
            }
            res.status(200).send(JSON.parse(data));
        })
    })
    .post((req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
            if (err) {
                console.log(err, 'This error is from readFile'); 
            } else {
                let notes = JSON.parse(data);
                notes.push (req.body)
                notes = createId(notes)
                console.log(notes);
                fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), err =>{
                    if (err) {
                    console.log(err, 'This error came from writeFile');
                    res.status(404).send('Cannot save note')
                    } else {
                    res.status(201).send(req.body)
                    }
                })
            }
        })
    });

    router.route('/notes/:id')
        .delete((req, res) => {
            console.log(req.params);
            fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
                if (err) {
                    console.log(err, 'This error is from readFile'); 
                } else {
                    let notes = JSON.parse(data);
                    let updatedNotes = notes.filter ((currentNote) => {
                        return currentNote.id != req.params.id
                    })
                    console.log(updatedNotes);
                    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotes), err =>{
                        if (err) {
                        console.log(err, 'This error came from writeFile');
                        res.status(404).send('Cannot delete note')
                        } else {
                        res.status(201).send('Note deleted')
                        }
                    })
                }
            })
    })


module.exports = router