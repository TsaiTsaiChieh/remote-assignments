const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "assignment"
});

db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.post('/sign-up', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    let users = { email, password };
    let sql_search = `SELECT * FROM user WHERE email='${email}'`;
    // 搜尋有無重複的電子郵件
    db.query(sql_search, (err, result) => {
        if (result.length != 0) {
            let string = 'fail';
            res.redirect(`/home?signup=${string}`);
        }
        else {
            let sql_insert = 'INSERT INTO user SET ?';
            db.query(sql_insert, users, (err, result) => {
                res.redirect(`/member?user=${email}`);
            });
        }
    });
});

router.post('/sign-in', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    let sql_search = `SELECT * FROM user WHERE email='${email}' AND password='${password}'`;

    db.query(sql_search, (err, result) => {
        if (result.length != 0) {
            res.redirect(`/member?user=${email}`);
        } else {
            let string = 'fail';
            res.redirect(`/home?signin=${string}`);
        }
    });
});

module.exports = router;