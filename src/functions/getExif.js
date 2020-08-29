const exiftool = require("exiftool-vendored").exiftool;
const deleteImage = require("./deleteImage");

function getImageExif(imagePath) {
  return exiftool
    .read(imagePath)
    .then((data) => {
      deleteImage(imagePath);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => console.log(`[*] Error in getImageExif ${err}`));
}

module.exports = getImageExif;
