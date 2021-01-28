const uuid = require("uuid");
const fs = require("fs")

const getAWSbucket = () => {
   if(fs.existsSync(__dirname + '/../.env-file.json')) { 
      let aws_rawdata = fs.readFileSync(__dirname + '/../.env-file.json');
      let aws_data = JSON.parse(aws_rawdata);
      return aws_data.awsBucket;
      } 
   else { //Heroku
      return process.env.awsBucket;
      }
   }


var listingsTable = new Array()

const addListing = (itemName, itemDescription, mainPhotoName, photosIds = []) => {

     var listingsObj = {
       "itemId": uuid.v4(),
       "itemName": itemName.trim().toString().slice(0,32),
       "itemDescription": itemDescription.trim().toString().slice(0,200),
       "mainPhotoName": mainPhotoName,
       "photosIds":photosIds,
       "listingDateTime": (new Date()).toString(),
       "bids": [],
       "winner": "" //username
     }

        listingsTable.unshift(listingsObj)
 }

//  const getListings = (req, res) => {
//     return res.send(JSON.stringify(listingsTable))
//  }

 const getListings = (req, res) => {
    return res.send(JSON.stringify(listingsTable))
 }

 const getListingsArray = () => {
    return listingsTable
 }

 const getListingsNumber = () => {
    return listingsTable.length
 }

module.exports =  {
    addListing,
    getListings,
    getListingsNumber,
    getListingsArray,
    getAWSbucket
 }