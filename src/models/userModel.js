const mysql = require('./mysqlConnect');

get = ()=>{
  return {model:'user.get'}
}
 
 login =  async(data) => {
    console.log(data);
    sql = "SELECT id, nome, email FROM usuario WHERE email='"+data.email+"' and senha='"+data.senha+"'";
    const usuarios = await mysql.query(sql);
    result = null;
    if(usuarios[0].id){
      const id = usuarios[0].id;
      var token = jwt.sign({id} , 'CIMOL', {expiresIn:3600});
      console.log("Fez login e gerou o token");
      result = {auth: true, token: token, user: usuarios[0]}
    }
    return result;
  }
  
  logout = (token) => {
    console.log("Fez logou e cancelou o token");
    return{ auth: false, token: null};
  }
  verifyJWT = (token) => {
    if (!token) {
      resp = {auth: false, message: "Token não informado"}
    }
    jwt.verify(token,'CIMOL', function (err,decoded){

        if (err) {
          resp= {auth: false, message:'Token invalido'}
        }
        if (decoded) {
          resp = {auth:true, idUser:decoded.id};
        }
    });
    return resp;
  }
 
module.exports = {get}