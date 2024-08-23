const path = require('path');
const Sequelize = require('sequelize');
const root = path.normalize(`${__dirname}/../`);
const {glob} = require('glob');

const models={};

const sequelize = new Sequelize(
    global.config.db.name,
    global.config.db.username,
    global.config.db.password,
    {
        host:global.config.db.host,
        port:global.config.db.port,
        dialect:'mysql'
    }

);

(async()=>{

    try{
        
        const modelFiles = await glob('modules/**/*.model.js');

        let model;
        modelFiles.forEach(file=>{

            model = require(path.join(root, file))(sequelize, Sequelize.DataTypes);
            models[model.name] = model

        })

        sequelize
                .sync({force:global.config.forceSync})
                .then(()=>{
                    
                    sequelize.authenticate().then(()=>{
                        console.log(' Connection successfully established');  
                    });
                })
                
    }catch(err){
        console.log('Err',err)
    }

})();   

module.exports={sequelize, models};