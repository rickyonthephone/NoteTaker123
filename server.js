//Declare dependencies

const fs = require('fs');
const path = require('path');
const express = require('express')

app.get('/', (req, res) => {
    res.send('Welcome')
  })
   
  app.listen(3000)