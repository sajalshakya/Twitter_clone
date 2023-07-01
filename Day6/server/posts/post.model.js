// import data from './post.data.json' assert { type: 'json' };

// let Posts = [];

// Posts = data;

// export default Posts; 


const Posts = (sequelize, DataTypes) => {
    const Post = sequelize.define("post",{
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
    , {
        timestamps: false
    });
    return Post
}

export default Posts;