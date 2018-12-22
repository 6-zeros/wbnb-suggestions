const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/index.js')

 const app = express();
 const port = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../public'));

app.get('/localhost:3123/house' , (req, res)=>{
  db.find({} , (err , data)=>{
    console.log(data , 'this better work')
    res.send(data)
  })

})

app.listen(port, ()=>{
  console.log('we all good');
});
