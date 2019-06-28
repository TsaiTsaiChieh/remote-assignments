const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        console.log(name);

    }
    else {
        console.log('no');

    }
    // res.cookie('name', req.body.username);
});

module.exports = router;