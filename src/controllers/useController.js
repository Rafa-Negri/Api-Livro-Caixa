const  userModel = require('../models/userModel');


exports.get=async(req, res,next)=>{
    res.status(200).send({status:'ok'});
}

exports.login =async(data) =>{
    return await userModel.login(data);
}