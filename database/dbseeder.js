const mongoose = require("mongoose");
const loremIpsum = require("lorem-ipsum");
const fs = require('fs');
// const db = require('./index.js');
const path = require('path');

// const para = loremIpsum({
//   count: 1,
//   units: "paragraph",
//   sentenceLowerBound: 5,
//   sentenceUpperBound: 15,
//   paragraphLowerBound: 3,
//   paragraphUpperBound: 7,
//   format: "plain",
//   random: Math.random
// });

const sent = loremIpsum({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  format: "plain",
  random: Math.random
});

// const randomBool = Math.random() >= 0.5;
const randomNum = (from, to) => {
  return Math.floor(Math.random() * to + 1) + from;
};


// const seedGenerateor = (/* entries */) => {

//   var stream = fs.createWriteStream('./database/data.csv', { flags: 'w' });
//   stream.write("id,title,cost,picture,reviewCount,stars,beds\n")
//   // const generatedData = [];
//   for (let i = 0; i <= 5000000; i += 1) {
//     imgId = (i % 981) + 1
//     let id = i + 1
//     let title = sent
//     // prem: randomBool
//     let cost = randomNum(50, 200)
//     let picture = `https://s3-us-west-1.amazonaws.com/wbnb-suggestions-images/img${imgId}.jpg`
//     let reviewCount = randomNum(20, 1500)
//     let stars = randomNum(1, 5)
//     let beds = randomNum(1, 7)
//     // favorite: randomBool
//     // description: para
//     var listingDetail = `${id},${title},${cost},${picture},${reviewCount},${stars},${beds}\n`
//     stream.write(listingDetail);
//     // generatedData.push(photo);
//   }
//   // return generatedData;
// };

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


// const generatedData = seedGenerateor(1000000);
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


// fs.writeFile('./database/data.txt', JSON.stringify(generatedData), (err, data) => {
//   if (err) {
//     return console.log('Error in writing', err);
//   }
//   // seeder();
// });
