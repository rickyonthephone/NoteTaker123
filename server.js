//Declare dependencies

const fs = require('fs');
const path = require('path');
const express = require('express');
const htmlRoutes = require('./Routes/htmlroutes.js');
const apiRoutes = require('./Routes/apiroutes.js');

const PORT = process.env.PORT || 8000;


const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    
})

   
  app.listen(PORT, function (){
      console.log ('Listening')
  });

