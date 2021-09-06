const env = {
    // database: 'resource_management',
    // username: 'root',
    // password: 'Satya@45',
    // host: '10.201.103.48',
    database: 'carwash',
    username: 'admin',
    password: 'adminadmin',
    host: 'carwash.ctfevld2kyx8.ap-south-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        requestTimeout: 5000
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;