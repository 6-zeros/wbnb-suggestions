const express = require('express');
let app = express();
let port = 3123;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../public'));



app.listen(port, ()=>{
  console.log('we all good');
});