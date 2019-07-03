const express = require('express');
const router = express.Router();

router.get('.?', (req, res) => {
    const { user } = req.query;
    res.render('member', { user });
});

module.exports = router;