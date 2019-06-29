const express = require('express');
const router = express.Router();

router.get('.?', (req, res) => {
    const { number } = req.query;
    // cons3ole.log(number);

    var data = '';

    if (!number) {
        data = 'Lack of Parameter';

    } else if (isNaN(number)) {
        data = 'Wrong Parameter';
    }
    else if (!isNaN(parseInt(number))) {
        let num = parseInt(number);
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
            //     data.text += i;
            //     if (i != num) data.text += '+'
        }
        // data.text += '=';
        data = sum;

    }
    res.render('getData', { data });
});


module.exports = router;