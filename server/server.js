const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/rooms/:roomids/', express.static(path.join(__dirname, '/../public')));

app.get('/house', (req, res) => {
  db.readSuggestion({}, (err, data) => {
    res.send(data);
  });
});

app.post('/rooms', (req, res) => {
  const { listingInfo } = req.body;
  addListing(id, listingInfo, () => {
    res.send(`added listing successfully`);
  });
});


app.put('/rooms/:id', (req, res) => {
  const { suggestionInfo } = req.body;
  const { id } = req.params;
  updateSuggestion(id, suggestionInfo, () => {
    res.send(`similar listing suggestions were updated successfully for the listing with id ${id}`);
  });
});

app.delete('/rooms/:id', (req, res) => {
  const { id } = req.params;
  const { listingInfo } = req.body;
  deleteListing(id, listingInfo, () => {
    res.send(`the listing with id ${id} number has been deleted successfully`);
  });
});

app.listen(port, () => { });
