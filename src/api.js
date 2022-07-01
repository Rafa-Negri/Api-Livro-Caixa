const express = require('express');
const app = express();
//
app.use(express.urlencoded({extended : true}))
app.use(express.json());

const router = express.Router();
const route = require('./routers/router');

/* app.use('/', router.get('/',function (req, res) {
    res.status(200).send("<h1> Api Caixa </h1>")
})); */
app.use('/',route);

module.exports = app;