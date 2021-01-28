var sha1 = require('sha1')

var photoTable = []

const addPhoto = (originalPhotoName, photoAlt = "", photoTitle = "") => {

    var photoId = sha1(originalPhotoName + (new Date().getTime()).toString())
    var photoObj = {
        "id": photoId,
        "originalPhotoName": originalPhotoName,
        "photoAlt": photoAlt,
        "photoTitle" : photoTitle
      }

    if(photoTable.length < 6) {
        photoTable.unshift(photoObj)
    }
    else {
        photoTable.pop()
        photoTable.unshift(photoObj)
    }

    return photoId
 }

 const getPhotos = (req, res) => {
    return res.send(JSON.stringify(photoTable))
 }

 const getPhotosNumber = () => {
    return photoTable.length
 }

module.exports =  {
    addPhoto,
    getPhotos,
    getPhotosNumber
 }
