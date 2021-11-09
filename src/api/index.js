const express = require("express");
const path = require('path');
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+"/html/index.html"))
})

app.get("/nosotros", function(req, res) {
    res.sendFile(path.join(__dirname+"/html/nosotros.html"))
})

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});