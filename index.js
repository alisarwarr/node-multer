const express = require("express");
const app = express();


const multer  = require("multer");
const upload = multer({ dest: "uploads/" });


app.post("/upload-single", upload.single("file"), (req, res, next) => {
    res.json(req.file);
});

app.post("/upload-multiple", upload.array("files", 2), (req, res, next) => {
    res.json(req.files);
});

app.post("/upload-details", upload.fields([{ name: "file1"}, { name: "file2" }]), (req, res, next) => {
    res.json(req.files);
});


app.listen(3000);