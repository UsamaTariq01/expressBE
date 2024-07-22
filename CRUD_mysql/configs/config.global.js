const path = require('path'),
environment = 'local'

global.config={}

const initConfiguration=()=>{

    try{

        global.config = require(path?.join(__dirname,'env',`env.${environment}.json`));

    }catch(err){
        console.log(' !! Err while loading init configuration:',err);
        throw new Error({message:'Err while loading init configuration'})
    }

}
module.exports={initConfiguration}