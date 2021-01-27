const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

var usersTable = [
    {
    "userName": "User1",
    "password": "IamUserOne",
    "itemsWonIds" : [],
    "itemsNotWonIds": [],
    "userRole": "user"
  },
  {
    "userName": "User2",
    "password": "IamUserTwo",
    "itemsWonIds" : [],
    "itemsNotWonIds": [],
    "userRole": "user"
  },
  {
    "userName": "Admin",
    "password": "IamTheBoss",
    "itemsWonIds" : [],
    "itemsNotWonIds": [],
    "userRole": "admin"
},
]

module.exports = (req, res) => {
  
    //--- BEGIN authentication (simplified)
  var userFound = false
  var response = {}
  
  usersTable.filter(function(user){
  
    if(user.userName === req.body.username.trim() && user.password === req.body.password.trim()){
          userFound = true
      var userRole = user.userRole
  
       req.session.userName = req.body.username.trim();
       req.session.userRole = userRole;
       req.session.loggedIn = true;
      
       if(userRole === "user") {
  
          response = {
            "result": "no_errors",
            "userType": "user"
          }
  
        } else if(userRole === "admin") {
  
          response = {
            "result": "no_errors",
            "userType": "admin"
          }
  
        }
          return res.send(response);
    } 
  });
  
  if(userFound === false) {
    let response = {
          "result": "incorrect credentials"
        }
         return res.send(response);
      }
  //---
  /*
  The Users:
  U: User1 P:IamUserOne
  U: User2 P:IamUserTwo
  U: Admin P: IamTheBoss
  
  */
  
  }
