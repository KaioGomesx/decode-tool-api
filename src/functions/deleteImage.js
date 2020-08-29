const fs = require("fs");

function deleteImage(path) {
  try {
    fs.unlinkSync(path);
  } catch (err) {
    console.error(`[*] Error in delete image: ${err}`);
  }
}

module.exports = deleteImage;
