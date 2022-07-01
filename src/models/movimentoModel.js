get = async (query) => {
    query = JSON.parse(query);
    slq = "SELECT ";
    if(query.select.data){
        sql+="data, ";
    }
    if(query.select.descricao){
        sql+="descricao, ";
    }
    if(query.select.valor){
        sql+="valor, ";
    }
    if(query.select.tipo){
        sql+="tipo, ";
    }
    sql = sql.substring(0, sql.length -2)
    sql+=" FROM movimento"
    if(query.where){
        sql+=" WHERE"
        query.where.forEach(item =>{
            sql+=" "+item.campo+" "+item.operador.replace('/', '')+" '"+item.valor+"' AND ";
        })
        sql=sql.substring(0, sql.length - 3);
    }
    return await mysql.query(sql);
}