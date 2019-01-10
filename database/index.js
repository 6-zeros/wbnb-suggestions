const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/houses', {}, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('im connected?');
});

const photoCaraSchema = mongoose.Schema({
  id: { type: Number, unique: true, index: true },
  title: String,
  prem: Boolean,
  cost: Number,
  picture: String,
  rcount: Number,
  stars: Number,
  beds: Number,
  favorite: Boolean,
  description: String,
});

const photoAdd = mongoose.model('similars', photoCaraSchema);

const readSuggestion = (data, callback) => {
  photoAdd.aggregate([{ $sample: { size: 10 } }], callback)
}

const addListing = (id, resInfo, cb) => {
  // insert listing into db
  // cb()
};

const updateSuggestion = (id, newResInfo, cb) => {
  // update suggestions of the related listing
  // cb()
};

const deleteListing = (id, resInfo, cb) => {
  // delete the listing of the related id
  // cb()
};

module.exports = {
  photoAdd,
  readSuggestion,
  addListing,
  updateSuggestion,
  deleteListing
};

