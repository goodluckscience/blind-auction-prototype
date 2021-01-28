# Blind Auction - Node.js (dirty) Prototype

**Under construction, but already partly working**
* Blind Auction Prototype is Node.js/Express application developed on [Heroku](https://lanzarote-test-1.herokuapp.com/) with 
  - basic cookies authentication
  - fixed number of users
  - AWS S3 storage for items' photo
  - [Clean Blog Bootstrap template](https://startbootstrap.com/theme/clean-blog) 

# Additional details:

  - AWS S3 credentials are stored in file .env-file.json:
  >{
    "AWS_ACCESS_KEY_ID": "xxxxx",
    "AWS_SECRET_ACCESS_KEY": "yyyyy",
    "awsBucket": "zzzzz"
> }

  - If the file cannot be found, Heroku process vars key/value are used. It means that localhost installation uses .env-file.json, but Heroku installation doesn't use the file. (the file it is excluded in .gitignore)
  - Users data is fixed for 3 test users for demo version and stored in **userAuth** module
  - Pages: Home, Login, Auction, User Dashboard, Admin Dashboard and Logout (technically not a page, but route)
  - Only Admin can add listing on Admin Dashboard, which will be visible on Auction page.
  - still missing: mechanics should be added to buttons (they have generated ids, which need to be transferred with username to set winner, update users dashboards etc etc etc etc)

# Example of array of listings objects (used for Auction Page, dev lookup at route /getListings)
>[
  {"itemId":"ae49a00c-695f-4bef-aa18-da1c915d4abb",
    "itemName":"Listing 3",
    "itemDescription":"Description 3",
    "mainPhotoName":"item-3-110200.jpeg",
    "photosIds":["46a5741c53dd991accfe8fae48e8a2235df5b4c8"],
    "listingDateTime":"Thu Jan 28 2021 03:26:22 GMT+0000 (Greenwich Mean Time)",
    "bids":[],"winner":""},
  {"itemId":"7965dc42-fecb-40ec-b27b-f18b6551e7b7",
    "itemName":"Listing 2",
    "itemDescription":"Description 2",
    "mainPhotoName":"item-2-94509.jpeg",
    "photosIds":["523c94a5d7764e7862084f23663db2fd753e39c8"],
    "listingDateTime":"Thu Jan 28 2021 03:26:14 GMT+0000 (Greenwich Mean Time)",
    "bids":[],"winner":""},
  {"itemId":"ec8002ee-2b5b-4f76-86bd-b42769109872",
    "itemName":"Listing 1",
    "itemDescription":"Description 1",
    "mainPhotoName":"item-1-534893.jpeg",
    "photosIds":["ebe4476551a6041e72d05017d074f23c9781b225"],
    "listingDateTime":"Thu Jan 28 2021 03:26:03 GMT+0000 (Greenwich Mean Time)",
    "bids":[],
    "winner":""}
>]

### Tech

The test Blind Auction uses a number below listed source projects to work properly:

* Node.js
* Express 
* EJS templating

License
----

MIT