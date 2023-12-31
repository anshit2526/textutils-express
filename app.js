const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    const params = {
        title: "TextUtils",
        aboutText: "About"
    }
    res.render('home.pug', params)
})
app.get("/about", (req, res) => {
    const params = {
        title: "TextUtils",
        aboutText: "About"
    }
    res.render('about.pug', params)
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
})

