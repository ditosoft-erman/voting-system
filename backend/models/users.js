module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('Users', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, 
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_initial: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year_level: {
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User_roles',
          key: 'role_id',
        },
      },
      section: {
        type: Sequelize.STRING,
      },
      contact_number: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
    }, {
      tableName: 'Users',
      timestamps: false,
    });
  
    Users.associate = (models) => {
      Users.belongsTo(models.UserRoles, {
        foreignKey: 'role_id',
        as: 'role',
      });
    };
  
    return Users;
  };
  