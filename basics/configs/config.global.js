const path = require('path'),
    environment = 'local',
    fs = require('fs');


global.config={}

const initConfiguration=()=>{

    try{
        
        global.config = require(path.join(__dirname, 'env', `env.${environment}.json`));
        
    }catch(err){
        console.log(err);
        // throw new Error({message:'err while loading init configurations'});
    }

}
module.exports = {initConfiguration};