require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const redis = require("redis"),
client = redis.createClient();
client.on("error", function (err) {
  console.log("Error " + err);
});

const app = express();
const port = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/loaderio-f8f4264807d737383637de0849a3a545.txt', express.static(path.join(__dirname, '/../public/loaderio-f8f4264807d737383637de0849a3a545.txt'))); // for loader.io
app.use('/rooms/:id', express.static(path.join(__dirname, '/../public')));


app.get('/:id/suggestions', (req, res) => {
  const { id } = req.params;
  client.get(id, function (err, reply) {
    // reply is null when the key is missing
    if (reply !== null) {
      res.send(reply);
    }
    else {
      db.getSuggestionInfo(id, (result) => {
        res.send(result);
        // cache e ekle
        client.set(id, JSON.stringify(result));
      });
    }
  });
});

app.post('/:id/suggestions', (req, res) => {
  const { id } = req.params;
  const { suggestionInfo } = req.body;
  addListing(id, suggestionInfo, () => {
    res.send(`added listing successfully`);
  });
});


app.put('/:id/suggestions', (req, res) => {
  const { id } = req.params;
  const { suggestionInfo } = req.body;
  updateSuggestion(id, suggestionInfo, () => {
    res.send(`similar listing suggestions were updated successfully for the listing with id ${id}`);
  });
});

app.delete('/:id/suggestions', (req, res) => {
  const { id } = req.params;
  const { suggestionInfo } = req.body;
  db.deleteSuggestion(id, suggestionInfo, () => {
    res.send(`the suggestion with id ${id} number has been deleted successfully`);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
