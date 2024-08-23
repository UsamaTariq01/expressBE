const models = require('../../../configs/config.sequelize').models,
    { Op } = require('sequelize');


const createUser = async(req,res)=>{

    try{

        const result = await models.User.create(req.body);
        res.status(200).json(result);

    }catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }

}

const getAllUsers = async(req,res)=>{

    try{

        const params = {attributes: ['id','firstName','lastName','gender', 'email']}
        
        const result = await models.User.findAll(params);
        res.status(200).json(result);

    }catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }

}

const getUserById = async(req,res)=>{

    try{

        const id = req.query.id;
        const condition  = {
            where: {
                id: id,
            },
        }

        const result = await models.User.findAll({...condition});
        res.status(200).json(result);

    }catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }

}

const updateUser = async(req,res)=>{

    try{

        const id = req.query.id;
        
        const valuesToUpdate = {...req.body}
        const condition = {
            where: {
                id:id
            }
        }

        const result = await models.User.update(valuesToUpdate,{
           ...condition 
        });
        res.status(200).json(result);

    }catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }

}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser
}