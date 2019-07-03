const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');
const app = express();


app.use(body_parser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
const mainRouters = require('./routes');
app.use('/', mainRouters);
const homeRouters = require('./routes/home');
app.use('/home', homeRouters);
const memberRouters = require('./routes/member');
app.use('/member', memberRouters);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App is running on localhost: 3000 by Tsai');
});