module.exports = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'votingDB',
    dialect: 'mysql',
    pool:{
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}