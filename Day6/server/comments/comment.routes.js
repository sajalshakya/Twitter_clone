import Express from 'express'
import CommentController from './comment.controller.js';
import CommentMiddleware from './comment.middleware.js';

const route = Express.Router();

route.get('/posts/:postId/comments', CommentController.getAllComments)
route.get('/posts/:postId/comments/:commentId', CommentController.getComment)
route.post('/posts/:postId/comments', CommentMiddleware, CommentController.createComment)
route.put('/posts/:postId/comments/:commentId', CommentMiddleware, CommentController.updateComment)
route.delete('/posts/:postId/comments/:commentId', CommentController.deleteComment)

export default route;