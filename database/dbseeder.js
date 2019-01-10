const mongoose = require("mongoose");
const loremIpsum = require("lorem-ipsum");
const fs = require('fs');
const db = require('./index.js');
const path = require('path');

const para = loremIpsum({
  count: 1,
  units: "paragraph",
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  format: "plain",
  random: Math.random
});

const sent = loremIpsum({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  format: "plain",
  random: Math.random
});

const randomBool = Math.random() >= 0.5;
const randomNum = (from, to) => {
  return Math.floor(Math.random() * to + 1) + from;
};

const seedGenerateor = (entries) => {
  const generatedData = [];
  for (let i = 1; i <= entries; i += 1) {
    imgId = i % entries + 1
    const photo = {
      _id: i,
      title: sent,
      premium: randomBool,
      cost: randomNum(50, 200),
      picture: `https://s3-us-west-1.amazonaws.com/wbnb-reviews-images/img${imgId}.jpg`,
      rcount: randomNum(20, 1500),
      stars: randomNum(1, 5),
      beds: randomNum(1, 7),
      favorite: randomBool,
      description: para,
    };
    generatedData.push(photo);
  }
  return generatedData;
};

const generatedData = seedGenerateor(1000);
const seeder = () => {
  db.photoAdd.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Zeroed out");
      fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
        if (err) {
          console.log('Error in reading file.', err);
        }
        const parsed = JSON.parse(data);
        db.photoAdd.insertMany(parsed).then();
      });
    }
  });
};
fs.writeFile('./database/data.txt', JSON.stringify(generatedData), (err, data) => {
  if (err) {
    return console.log('Error in writing', err);
  }
  seeder();
});
