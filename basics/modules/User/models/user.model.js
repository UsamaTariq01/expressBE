module.exports = (sequelize,DataTypes)=>{

    class User extends sequelize.Sequelize.Model{}

    User.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['male', 'female', 'other']
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }

    },{
        sequelize,
        timestamps:true
    });

    return User

}