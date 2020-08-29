const express = require("express");
const cors = require("cors");

const downloadImageAndGetImageExif = require("./functions/downloadImageAndGetImageExif");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/exif", async (req, res) => {
  const { imageUrl } = req.body;
  const exifData = await downloadImageAndGetImageExif(imageUrl);
  res.send(exifData);
});

app.listen(8080, () => console.log("server up"));
