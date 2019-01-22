const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'seymaakin'
});

const createImportedListingsTable = `
DROP TABLE IF EXISTS imported_listings;
CREATE TABLE imported_listings (id varchar primary key, title varchar, cost varchar, picture varchar, reviewCount varchar, stars varchar, beds varchar);
`;

const importListingsData = `
COPY imported_listings
FROM '/Users/seymaakin/Desktop/hackreactor/hrsf107-system-design-capstone/wbnb-suggestions/database/postgreSQL/postgres_listings_data.csv'
WITH (format csv, header);
`;

client.connect()
  .then(() => console.log('-- CONNECTED TO seymaakin DATABASE'))
  .then(() => client.query(createImportedListingsTable))
  .then(() => console.log('---- CREATED imported_listings TABLE'))
  .then(() => console.log('------ IMPORTING LISTINGS DATA'))
  .then(() => client.query(importListingsData))
  .then(() => console.log('-------- SUCCESSFULLY IMPORTED LISTINGS DATA'))