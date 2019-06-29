const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('.', { message: 'Hello, My Server!' });
});

router.get('/myName', (req, res) => {
    const username = req.cookies.username;
    res.render('myName', { username });
});

router.post('/trackName', (req, res) => {
    res.redirect(`/trackName?name=${req.body.username}`);
});

router.post('/clear', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});
module.exports = router;