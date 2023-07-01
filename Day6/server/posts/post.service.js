// import Posts from './post.model.js'

import db from '../config/sequelize.js';

const PostService = {
    async getAllPosts() {
        const query = 'SELECT * FROM posts';
        const [posts] = await db.sequelize.query(query);
        return posts;
    },
    async getPostWithComment(postId){
        const query = 'SELECT * FROM posts LEFT JOIN comments ON comments.postId = posts.postID WHERE posts.postId = :postId'
        const values = {postId}
        const [postWithComment] = await db.sequelize.query(query, {replacements:values});
        return postWithComment;
    },
    async createPost(title,body) {
        const query = 'INSERT INTO posts(title,body) VALUES(:title, :body)';
        const values = {title, body}
        await db.sequelize.query(query, {replacements:values});
        return "created Post;"
    },
    async updatePost(postId, title, body) {
        const query = 'UPDATE posts SET title = :title, body = :body WHERE postId = ${postId}'
        const values = {postId, title, body}
        await db.sequelize.query(query, {replacements:values});
        return "post updated"
    },
    async deletePost(postId) {
        const query = 'DELETE FROM posts WHERE postId = :postId'
        const values = {postId}
        await db.sequelize.query(query, {replacements:values});
        return "post updated"
    },
};

export default PostService;
