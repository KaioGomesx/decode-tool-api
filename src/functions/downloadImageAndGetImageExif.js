const download = require("image-downloader");

const getImageExif = require("./getExif");

function downloadImageAndGetImageExif(url) {
  const options = {
    url,
    dest: ".",
  };

  return download
    .image(options)
    .then(({ filename }) => {
      const exifData = getImageExif(filename);
      return exifData;
    })
    .catch(console.error);
}

module.exports = downloadImageAndGetImageExif;
