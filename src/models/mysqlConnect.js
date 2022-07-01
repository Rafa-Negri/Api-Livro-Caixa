async function connect() {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

const mysql = require("mysql2/promise");
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'caixa',
    password: '2204c.'
});

console.log("Conectou no Mysql Server");
global.connection = connection;
return connection;
}

async function query(sql){
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

get= async () =>{
    const usuarios = await mysql.query("SELECT * FROM usuario");
    return usuarios;
}



/* const db = require('mysql2');
 
const mysql = db.createConnection({
    "host": "localhost",
    "database": "livro",
    "user": "root",
    "password": "2204c."
    
});


module.exports = {mysql}; */