var sha1 = require('sha1')

var photoTable = []

const addPhoto = (originalPhotoName, photoAlt = "", photoTitle = "") => {

    var photoObj = {
        "id": sha1(originalPhotoName + (new Date().getTime()).toString()),
        "originalPhotoName": originalPhotoName,
        "photoAlt": "",
        "photoTitle" : ""
      }

    if(photoTable.length < 6) {
        photoTable.unshift(photoObj)
    }
    else {
        photoTable.pop()
        photoTable.unshift(photoObj)
    }
 }

 const getPhotos = (req, res) => {
    return res.send(JSON.stringify(photoTable))
 }

 const getPhotosNumber = (req, res) => {
    return photoTable.length
 }

module.exports =  {
    addPhoto,
    getPhotos,
    getPhotosNumber
 }
