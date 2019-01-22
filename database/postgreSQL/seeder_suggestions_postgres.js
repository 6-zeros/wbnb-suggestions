var fs = require('fs');

const randomNum = (from, to) => {
  return Math.floor(Math.random() * (from - to) + to);
};

const randomNumExceptId = (from, to, id) => {
  var num = Math.floor(Math.random() * (from - to) + to);
  return (num === id) ? randomNum(from, to, id) : num;
}

const randomSuggestionGenerator = (listingId) => {
  let suggestionSet = new Set();
  let numberOfSuggestions = randomNum(5, 11)
  while (suggestionSet.size <= numberOfSuggestions) {
    var randomSuggestion = randomNumExceptId(1, 10000000, listingId);
    suggestionSet.add(randomSuggestion);
  }
  return suggestionSet;
}

var current = -1;
var stream = fs.createWriteStream('/tmp/postgres_suggestions_data.csv', { flags: 'w' });
stream.write("listingId, suggestionId\n")
let numberOfListings = 10000000;

function seedGenerator() {
  current += 1;
  let listingId = current + 1;
  let uniqueSuggestions = randomSuggestionGenerator(listingId);
  for (let suggestion of uniqueSuggestions) {
    if (current === numberOfListings) {
      return stream.end();
    }
    let suggestionId = suggestion;
    var suggestionDetail = `${listingId},${suggestionId}\n`
    var canContinue = stream.write(suggestionDetail);
  }
  if (!canContinue) {
    stream.once('drain', seedGenerator);
  } else {
    seedGenerator();
  }
}

seedGenerator()