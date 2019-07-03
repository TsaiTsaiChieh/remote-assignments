const express = require('express');
const router = express.Router();


router.get('.?', (req, res) => {
    const { signup } = req.query;
    const { signin } = req.query;

    let message = '';
    if (signup == 'fail') {
        message = 'E-mail had been used, please re-register.';
        res.render('home', { signup_message: message });


    }
    else if (signin == 'fail') {
        message = 'User does not exist or password is wrong.';
        res.render('home', { signin_message: message });
    }
    else {
        res.render('home');
    }

});

module.exports = router;