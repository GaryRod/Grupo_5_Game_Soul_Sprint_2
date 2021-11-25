const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.static('views'));

app.listen(process.env.PORT || 3000, () => console.log("Servidor funcionando en el puerto 3000 o el puerto definido en Heroku"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

app.get('/productcart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
})

app.get('/productdetail', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
})
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})