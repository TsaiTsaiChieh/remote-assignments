const express = require('express');
const app = express();

const getDataRouters = require('./routes/getData');
const myNameRouters = require('./routes/myName');
const trackNameRouters = require('./routes/trackName');
app.use('/getData', getDataRouters);
app.use('/myName', myNameRouters);
app.use('/myName', trackNameRouters);
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/sum.html', (req, res) => {

});
app.listen(3000, () => {
    console.log('App is running on localhost: 3000 by Tsai');
});

