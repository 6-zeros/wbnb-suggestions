# CRUD API

> Implementation and functionality will be finalized after final database is chosen
  
## CREATE
- Route: app.post('houses')
- Listing info will come through the body of the request
- Calls the addListing function which will handle database insertion

## READ
- Route: app.get('/houses')
- Calls the readSuggestion function which will query the database to bring 10 random listings.

## UPDATE
- Route: app.put('/houses/:id')
- New suggestion info will come through the body of the request
- Room id will be contained in the url
- Calls the updateSuggestion function which will query the database for the roomId and update it

## DELETE
- Route: app.delete('/houses/:id')
- Listing info will come through the body of the request
- Room id will be contained in the url
- Calls the deleteListing function which will query the database on roomId and delete the necessary recrods