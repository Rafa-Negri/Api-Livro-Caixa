const express = require('express');
const userController = require('../controllers/useController');
const router = express.Router();
const userModel = require('../models/userModel');

exports.get = async (req, res) => {
    res.status(200).send({status: 'OK'});
}

router.get('/', (req, res,next) => {
    res.status(200).send("<h1> Api Caixa </h1>");
})
 
router.get('/user', async (req, res, next) => {
    user = await userController.get();
    res.status(200).send(user);
}); 

router.post('/user/login', async (req, res, next) =>{
    user = await userController.login(req.body);
    res.status(200).send(user);
})
router.post('/user/logout', async (req, res, next)=>{
 user = await userController.login(req.headers['x-access-token']);
 res.status(200).send(user);
})

router.post('/mov', async (req, res, next)=>{
    auth = userController.verifyJWT(req.headers['x-access-token'])
    if(auth.idUser) {
        if(req.headers.iduser==auth.idUser) {
            resp = await movimentoController.post(req.body, req.headers.iduser);
            resp = Object.assign({}, resp, auth);
        }else{
            resp = {"status":"null", auth}
        }
    }else{
        resp = {"status":"null", auth}
    }
    res.status(200).send(resp);
})
//router.get('/user/',userController.get)  


module.exports = router;