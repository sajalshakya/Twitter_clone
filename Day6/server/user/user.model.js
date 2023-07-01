const Users = (sequelize, DataTypes) =>{
    const User = sequelize.define("user", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:  true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
    return User
}

export default Users;