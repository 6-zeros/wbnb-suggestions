const express = require('express');
 const app = express();
 const port = 3123;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../public'));



app.listen(port, ()=>{
  console.log('we all good');
});
