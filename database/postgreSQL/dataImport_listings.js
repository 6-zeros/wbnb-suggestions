const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'seymaakin'
});

const createImportedListingsTable = `
DROP TABLE IF EXISTS listings;
CREATE TABLE listings (
  id SERIAL primary key, 
  title varchar, 
  cost INT NOT NULL, 
  picture varchar, 
  reviewCount INT NOT NULL, 
  stars INT NOT NULL, 
  beds INT NOT NULL);
`;

const importListingsData = `
COPY listings (title, cost, picture, reviewCount, stars, beds)
FROM '/tmp/postgres_listings_data.csv''
WITH (format csv, header);
`;

client.connect()
  .then(() => console.log('-- CONNECTED TO seymaakin DATABASE'))
  .then(() => client.query(createImportedListingsTable))
  .then(() => console.log('---- CREATED listings TABLE'))
  .then(() => console.log('------ IMPORTING LISTINGS DATA'))
  .then(() => client.query(importListingsData))
  .then(() => console.log('-------- SUCCESSFULLY IMPORTED LISTINGS DATA'))