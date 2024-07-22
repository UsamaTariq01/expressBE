const {executeQuery, executeQueryWithParams} = require('../../configs/connection.config');


const getData=async()=>{
    try{
        let query = 'select * from firsttable';
        let results = await executeQuery(query);

        return results
    }catch(err){
        throw err;
    }
}

const setData=async(body)=>{

    try{
        let query = `insert into firsttable (name,status) values (?,?)`;
        let results = await executeQueryWithParams(query,body);

        return results
    }catch(err){
        throw err;
    }
}

module.exports={getData,setData}