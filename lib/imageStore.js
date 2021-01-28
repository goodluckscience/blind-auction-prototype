var sha1 = require('sha1')

var photoTable = new Array()

const addPhoto = (photoName, photoAlt = "", photoTitle = "") => {

    var photoId = sha1(photoName + (new Date().getTime()).toString())
    var photoObj = {
        "id": photoId,
        "photoName": photoName,
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

 const getPhotoNameById = (id) => {
    photoTable.filter(function(photo){
        if(photo.id == id) {
            return photo.photoName
        }
    })
 }


module.exports =  {
    addPhoto,
    getPhotos,
    getPhotosNumber,
    getPhotoNameById
 }
