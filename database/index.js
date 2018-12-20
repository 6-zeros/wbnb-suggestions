 const mongoose = require ('mongoose');
 
mongoose.connect('mongodb://localhost/houses', {} , (err)=>{
  if (err) {
    console.log(err);
  }
  console.log('im connected?');
});

let repoSchema = mongoose.Schema({
  _id: {type: Number, unique: true, index: true},
  postTitle: Text,
  cost: Number,
  image: Text,
  roomtype: {type: Text, beds: Number, Premium: Boolean},
  rating: {StarNum: Number, Votes: Numbers},
  description: Text
});

 let Carousel = mongoose.model('Similar', repoSchema);

module.exports = {
  repoSchema,
};
