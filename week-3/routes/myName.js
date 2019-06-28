const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('myName');
});
router.post('/', (req, res) => {
    // res.cookie('name', req.body.name)
    res.render('myName');
});

module.exports = router;