const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const aws = require('aws-sdk');
const imageStore = require('./imageStore');

if(fs.existsSync(__dirname + '/../.env-file.json')) { 
  let aws_rawdata = fs.readFileSync(__dirname + '/../.env-file.json');
  let aws_data = JSON.parse(aws_rawdata);
  
    var s3 = new aws.S3({
      accessKeyId: aws_data.AWS_ACCESS_KEY_ID,
      secretAccessKey: aws_data.AWS_SECRET_ACCESS_KEY
    });
  
    var awsBucket = aws_data.awsBucket;
  
  } else { //Heroku
    var s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
  
    var awsBucket = process.env.awsBucket;
  }

module.exports = (req, res, next) => { 
    
    const form = new formidable.IncomingForm(); 
  
    form.parse(req, function(err, fields, files){ 
  
        var imagePath = files.itemPhoto.path; 
  
        //--- BEGIN get extension
        if(!files.itemPhoto.name || !files.itemPhoto.name.match(/\.(jpg|jpeg|png)$/i)) {
          return res.send("Incorrect image! Only jpg, jpeg and png are allowed.")
        }
  
        if(files.itemPhoto.size > 1000000) {
          return res.send("Too big photo! Maximum: 1MB")
        }
        //--- END get extension
  
        var rawData = fs.readFileSync(imagePath) 
  
    let storedImageNameAWS = path.parse(files.itemPhoto.name).name + '-' + Math.floor(Math.random() * 1000000).toString() + path.parse(files.itemPhoto.name).ext;
    params = {Bucket: awsBucket, Key: storedImageNameAWS, Body: rawData };
  
         //---- BEGIN file transfer to s3
          s3.putObject(params, function(err, rawData) {
            if (err) {
              return res.send(err.message) 
            } else {

              //--- update images table
              imageStore.addPhoto(files.itemPhoto.name, "","")

              return res.send("Successfully uploaded") 
            }
          });
        //---- END file transfer to s3
    }) 
  }

  
 