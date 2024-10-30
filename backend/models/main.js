const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

// Initialize Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

// Define the db object to store models and Sequelize instances
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models
db.Users = require('./users')(sequelize, Sequelize);
db.UserRoles = require('./user_roles')(sequelize, Sequelize);

// Define associations
db.Users.belongsTo(db.UserRoles, { foreignKey: 'role_id', as: 'role' });
db.UserRoles.hasMany(db.Users, { foreignKey: 'role_id', as: 'users' });

// Export db object with models and Sequelize instance
module.exports = db;
