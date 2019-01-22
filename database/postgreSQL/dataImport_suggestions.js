const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'seymaakin'
});

const createImportedSuggestionsTable = `
DROP TABLE IF EXISTS imported_suggestions;
CREATE TABLE imported_suggestions (listing_id varchar, suggestion_id varchar, PRIMARY KEY (listing_id, suggestion_id), FOREIGN KEY (listing_id) REFERENCES imported_listings(id) ON UPDATE CASCADE);
`;

const importSuggestionsData = `
COPY imported_suggestions
FROM '/Users/seymaakin/Desktop/hackreactor/hrsf107-system-design-capstone/wbnb-suggestions/database/postgreSQL/postgres_suggestions_data.csv'
WITH (format csv, header);
`;

client.connect()
  .then(() => console.log('-- CONNECTED TO seymaakin DATABASE'))
  .then(() => client.query(createImportedSuggestionsTable))
  .then(() => console.log('---- CREATED imported_suggestions TABLE'))
  .then(() => console.log('------ IMPORTING SUGGESTIONS DATA'))
  .then(() => client.query(importSuggestionsData))
  .then(() => console.log('-------- IMPORTING SUGGESTIONS DATA'))

