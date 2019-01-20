const { Client } = require('pg');

const listing = new Client({
  host: 'localhost',
  user: 'seymaakin',
  database: 'seymaakin'
});

listing.connect((err) => {
  if (err) { console.log(err); }
});

const addSuggestion = (id, suggestionInfo, cb) => {
  const { suggestion_id } = suggestionInfo;
  const queryString = `INSERT INTO imported_suggestions (listing_id, suggestion_id)
                       VALUES (${id}, ${suggestion_id};`;
  listing.query(queryString, (err) => {
    if (err) { console.log(err) };
    cb();
  });
};

const getSuggestionInfo = (id, cb) => {
  const queryString = `select * from imported_listings where id IN ( select suggestion_id from imported_suggestions where listing_id = '${id}')`;
  listing.query(queryString, (err, result) => {
    if (err) { console.log(err) };
    cb(result.rows);
  });
};

const updateSuggestion = (id, suggestionInfo, cb) => {
  const { suggestion_id, new_suggestion_id } = suggestionInfo;
  const queryString = `UPDATE imported_suggestions SET suggestion_id=${new_suggestion_id} WHERE listing_id = ${id} and suggestion_id = ${suggestion_id};`;
  listing.query(queryString, (err) => {
    if (err) { console.log(err) };
    cb();
  });
};

const deleteSuggestion = (id, suggestionInfo, cb) => {
  const { suggestion_id } = suggestionInfo;
  const queryString = `DELETE FROM imported_suggestions WHERE listing_id = ${id} and suggestion_id = ${suggestion_id};`;

  listing.query(queryString, (err) => {
    if (err) { console.log(err) };
    cb();
  });
};

module.exports = {
  getSuggestionInfo,
  addSuggestion,
  updateSuggestion,
  deleteSuggestion
};