const mysql = require('mysql2');
const pool = mysql.createPool(global?.config?.db);

const executeQuery =(query)=>{

    return new Promise((resolve,reject)=>{

        pool.query(query,(err,results)=>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        })

    })
    
}

const executeQueryWithParams = (query,params)=>{

    return new Promise((resolve,reject)=>{

        pool.query(query,params,(err,results)=>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        })

    })
    
}

module.exports = {executeQuery,executeQueryWithParams}