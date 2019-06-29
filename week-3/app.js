const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');

const mainRouters = require('./routes');
const getDataRouters = require('./routes/getData');
const trackNameRouters = require('./routes/trackName');
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use('/', mainRouters);
app.use('/getData', getDataRouters);
app.use('/trackName', trackNameRouters);

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/sum.html', (req, res) => {

});


app.listen(3000, () => {
    console.log('App is running on localhost: 3000 by Tsai');
});

