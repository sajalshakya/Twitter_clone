 const dbConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'twitter_clone',
    dialect: "mysql",

    pool: {
        max:5,
        min:0,
        acquire: 3000,
        idle: 10000,
    }
}
export default dbConfig