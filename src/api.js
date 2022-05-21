const express = require('express');
const app = express();
//
app.use(express.urlencoded({extended : true}))
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', function (req, res) {
    res.status(200).send({status: 'OK'});
}));

module.exports = app;