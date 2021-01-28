const express = require("express");
const app = new express();
const photoUploadToAWS = require('./lib/photoUpload')
var session = require('express-session');
const userAuth = require('./lib/userAuth')
const bodyParser = require("body-parser");
const {getPhotos,getPhotoNameById} = require('./lib/imageStore')
const {getListings, getListingsArray, getAWSbucket} = require('./lib/auctionListing')

var path = require('path');
var http = require('http');


app.use(session({
  secret:  'aljf^367@p-+jY', // cookie_secret,
  resave: true,
  saveUninitialized: true
}));

//---

const ejs = require('ejs')
app.set("view engine", "ejs")

app.use(express.static("public"));

var port = process.env.PORT || 8080;


// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended : true}));
// // app.use(bodyParser.json());


app.get('/', (req, res) => {
  //res.status(400).send('Bad Request')
  res.render('home', { 
    loggedIn: req.session.loggedIn,
    userName: req.session.userName,
    userRole: req.session.userRole
  });
})

app.get('/login', (req, res) => {
  //res.status(400).send('Bad Request')
  res.render('login', { 
    loggedIn: req.session.loggedIn,
    userName: req.session.userName,
    userRole: req.session.userRole
  });
})



app.post('/login', userAuth)

app.get('/logout', function(req, res){
  req.session.destroy(function(){
    res.redirect('/login');
     //console.log("user logged out.")
  });
  //res.redirect('/login');
});

app.get('/auction-page', (req, res) => {


  res.render('auction-page', { 
    loggedIn: req.session.loggedIn,
    userName: req.session.userName,
    userRole: req.session.userRole,
    getAllListingsArray: getListingsArray(),
    awsBucket: getAWSbucket()
  });
   //res.render('auction-page')

})

app.get('/user-dashboard', (req, res) => {
  res.render('user-dashboard', { 
    loggedIn: req.session.loggedIn,
    userName: req.session.userName,
    userRole: req.session.userRole
  });
});

app.get('/admin-dashboard', (req, res) => {
  res.render('admin-dashboard', { 
    loggedIn: req.session.loggedIn,
    userName: req.session.userName,
    userRole: req.session.userRole
  });

  //res.render('admin-dashboard');
})

//--- BEGIN photo upload
app.post('/api/uploadaws', photoUploadToAWS)

app.get('/getPhotos', getPhotos)

app.get('/getListings', getListings)

app.listen(port, '127.0.0.1', () => {
  console.log(`App listening on port: ${port}/`);
});

