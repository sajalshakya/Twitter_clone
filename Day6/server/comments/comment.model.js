// import data from './comment.data.json' assert { type: 'json' };


// let Comments = [];
// Comments = data;

// export default Comments;

const Comments = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
        commentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: false // Disable timestamps
    });
    return Comment
}

export default Comments;