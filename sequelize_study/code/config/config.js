const development = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    // "logging": (...msg) => console.log(msg),
    "logging": true,
    "timezone": '+9:00', // 한국시간으로 설정
    // "pool": {
    //   max: 5,
    //   idle: 30000,
    //   acquire: 60000,
    // },
}

module.exports = { development }