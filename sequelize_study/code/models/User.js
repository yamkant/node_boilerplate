module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        user_seq: {
            comment: '유저 닉네임',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nickname: {
            comment: '유저 닉네임',
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        timestamps: false,
        tableName: 'users',
    });

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}