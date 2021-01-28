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

### Tech

The test Blind Auction uses a number below listed source projects to work properly:

* Node.js
* Express 
* EJS templating

License
----

MIT