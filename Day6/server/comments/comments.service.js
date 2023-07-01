import Comments from './comment.model.js'
import db from '../config/sequelize.js';

const CommentService = {
    async getAllComments(postId){
        const query = 'SELECT * FROM comments WHERE postId = :postId';
        const values = {postId}
        const [comments] = await db.sequelize.query(query, {replacements:values})
        return comments;
    },
    async getComment(commentId) {
        const query = 'SELECT * FROM comments WHERE commentId = :commentId';
        const values = {commentId}
        const [comment] = await db.sequelize.query(query, {replacements:values});
        return comment;
    },
    async createComment(body,postId) {
        const query = 'INSERT INTO comments(body,postId) VALUES(:body, :postId)';
        const values = {body, postId}
        const result = await db.sequelize.query(query, {replacements:values});
        console.log(result);
        return result;
    },
    async updateComment(commentId, body){
        const query = 'UPDATE comments SET body = :body WHERE commentId = :commentId';
        const values = {body, commentId}
        await db.sequelize.query(query, {replacements:values});
        return 'comment updated'
    },
    async deleteComment(commentId){
        const query = 'DELETE FROM comments WHERE commentId = :commentId';
        const values = {commentId}
        await db.sequelize.query(query, {replacements:values});
        return 'comment deleted'
    }
}

export default CommentService;