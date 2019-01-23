const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  database: 'listings',
  user: 'postgres',
  password: 'postgres',
  port: '5432',
});

const createImportedSuggestionsTable = `
DROP TABLE IF EXISTS suggestions;
CREATE TABLE suggestions (
  listing_id INT, 
  suggestion_id INT, 
  PRIMARY KEY (listing_id, suggestion_id), 
  FOREIGN KEY (listing_id) REFERENCES listings(id) ON UPDATE CASCADE);
`;

const importSuggestionsData = `
COPY suggestions
FROM '/tmp/postgres_suggestions_data.csv'
WITH (format csv, header);
`;

client.connect()
  .then(() => console.log('-- CONNECTED TO seymaakin DATABASE'))
  .then(() => client.query(createImportedSuggestionsTable))
  .then(() => console.log('---- CREATED suggestions TABLE'))
  .then(() => console.log('------ IMPORTING SUGGESTIONS DATA'))
  .then(() => client.query(importSuggestionsData))
  .then(() => console.log('-------- SUCCESSFULLY IMPORTED SUGGESTIONS DATA'))

