const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/papers', (req, res) => {
    res.render('papers')
})
app.get('/skills', (req, res) => {
    res.render('skills')
})

app.get('/about', (req, res) => {
    res.render('about')
})




app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})