const movimentoModel = require('../models/movimentoModel');
exports.post = async(data,idUser)=>{
    return await movimentoModel.post(data,idUser);
}

exports.get = async(query)=>{
    return await movimentoModel.get(query);
}