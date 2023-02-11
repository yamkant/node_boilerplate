const development = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "logging": (...msg) => console.log(msg),
    "timezone": '+9:00', // 한국시간으로 설정
}

module.exports = { development }