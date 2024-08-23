const userController = require('../controllers/user.controllers');

module.exports = (app,version)=>{

    const moduleName = '/user';
    
    app.post(
        `${version + moduleName}/create`,
        userController.createUser
    )
    
    app.get(
        `${version + moduleName}/getAll`,
        userController.getAllUsers
    )
    app.get(
        `${version + moduleName}/getUserById`,
        userController.getUserById
    )
    app.patch(
        `${version + moduleName}/update`,
        userController.updateUser
    )
    
}