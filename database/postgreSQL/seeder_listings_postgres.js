var fs = require('fs');
var faker = require('faker');

var titleGenerator = faker.lorem.sentence;

const randomNum = (from, to) => {
  return Math.floor(Math.random() * (from - to) + to);
};

var current = -1;
var stream = fs.createWriteStream('./database/postgreSQL/postgres_listings_data.csv', { flags: 'w' });
stream.write("id,title,cost,picture,reviewCount,stars,beds\n")
let numberOfListings = 10000000;

function seedGenerator() {
  current += 1;
  if (current === numberOfListings) {
    return stream.end();
  }
  let imgId = (current % 981) + 1;
  let id = current + 1;
  let title = titleGenerator();
  let cost = randomNum(50, 200);
  let picture = `https://s3-us-west-1.amazonaws.com/wbnb-suggestions-images/img${imgId}.jpg`;
  let reviewCount = randomNum(20, 1500);
  let stars = randomNum(1, 5);
  let beds = randomNum(1, 7);
  var listingDetail = `${id},${title},${cost},${picture},${reviewCount},${stars},${beds}\n`

  var canContinue = stream.write(listingDetail);

  if (!canContinue) {
    stream.once('drain', seedGenerator);
  } else {
    seedGenerator();
  }

}
seedGenerator()

