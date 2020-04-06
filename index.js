const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const publicDirectory = path.join(__dirname, '/public');

const viewsPath = path.join(__dirname, '/views');

app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.set('views', viewsPath);

app.get("/", (req, res) => {
    res.render('index', {
        title: "Why pick React for all your website needs?",
        why: ["update", "fast", "modern", "websites", "easy", "to use", "interact", "es7"]
    });
})

app.get("/about", (req, res) => {
    res.render('about');
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
})