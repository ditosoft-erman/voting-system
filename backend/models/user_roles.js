// models/user_roles.js
module.exports = (sequelize, Sequelize) => {
    const UserRoles = sequelize.define('UserRoles', {
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'User_roles',
      timestamps: false,
    });
  
    return UserRoles;
  };
  