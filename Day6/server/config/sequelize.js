import dbConfig from '../config/dbConfig.js'
import {Sequelize,  DataTypes} from 'sequelize';
import Posts from '../posts/post.model.js'
import Comments from '../comments/comment.model.js'
import Users from '../user/user.model.js'

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected');
})
.catch(err => {
    console.log('Error'+ err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = Users(sequelize, DataTypes)
db.posts = Posts(sequelize, DataTypes) 
db.comments = Comments(sequelize, DataTypes) 

db.posts.hasMany(db.comments, {
    foreignKey: 'postId',
    as: 'comment'
})
db.comments.belongsTo(db.posts, { 
    foreignKey: 'postId',
    as: 'post'
})

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Re-Sync Done!');
})

export default db;