//Declare dependencies

const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;
// const dbJson = require ('.db/db.json');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
  })
   
  app.listen(PORT, function (){
      console.log ('Listening')
  });

