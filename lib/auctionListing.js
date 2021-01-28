const uuid = require("uuid");

var listingsTable = []

const addListing = (itemName, itemDescription, photosIds = []) => {

     var listingsObj = {
       "itemId": uuid.v4(),
       "itemName": itemName.trim().toString().slice(0,32),
       "itemDescription": itemDescription.trim().toString().slice(0,200),
       "photosIds":photosIds,
       "listingDateTime": (new Date()).toString(),
       "bids": [],
       "winner": "" //username
     }

        listingsTable.unshift(listingsObj)
 }

 const getListings = (req, res) => {
    return res.send(JSON.stringify(listingsTable))
 }

 const getListingsNumber = () => {
    return listingsTable.length
 }

module.exports =  {
    addListing,
    getListings,
    getListingsNumber
 }