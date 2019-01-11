const mongoose = require("mongoose");
const loremIpsum = require("lorem-ipsum");
const fs = require('fs');
const path = require('path');

const sent = loremIpsum({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  format: "plain",
  random: Math.random
});

const randomNum = (from, to) => {
  return Math.floor(Math.random() * to + 1) + from;
};

var current = -1;
var stream = fs.createWriteStream('./database/data.csv', { flags: 'w' });
stream.write("id,title,cost,picture,reviewCount,stars,beds\n")
let numberOfListings = 10000000;

function seedGenerator() {
  current += 1;
  if (current === numberOfListings) {
    return stream.end();
  }
  let imgId = (current % 981) + 1
  let id = current + 1
  let title = sent
  let cost = randomNum(50, 200)
  let picture = `https://s3-us-west-1.amazonaws.com/wbnb-suggestions-images/img${imgId}.jpg`
  let reviewCount = randomNum(20, 1500)
  let stars = randomNum(1, 5)
  let beds = randomNum(1, 7)
  var listingDetail = `${id},${title},${cost},${picture},${reviewCount},${stars},${beds}\n`

  var canContinue = stream.write(listingDetail);

  if (!canContinue) {
    stream.once('drain', seedGenerator);
  } else {
    seedGenerator();
  }

}

seedGenerator()

// const seeder = () => {
//   db.photoAdd.deleteMany({}, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Zeroed out");
//       fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
//         if (err) {
//           console.log('Error in reading file.', err);
//         }
//         const parsed = JSON.parse(data);
//         db.photoAdd.insertMany(parsed).then();
//       });
//     }
//   });
// };