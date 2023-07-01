import {body}  from 'express-validator';
import validate from '../express-validate.js'

const CommentMiddleware = validate([
    body('body').notEmpty().withMessage('Body cant be empty')
])
export default CommentMiddleware