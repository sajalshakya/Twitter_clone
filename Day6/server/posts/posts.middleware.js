import {body}  from 'express-validator';
import validate from '../express-validate.js'

const PostMiddleware = validate([
    body('title').isLength({max:50}).withMessage('Title shoud be less than 50 characters')
    .isAlphanumeric().withMessage('Title cant contain special characters')
    .notEmpty().withMessage('Title cant be empty'),
    body('body').notEmpty().withMessage('Body cant be empty')
])
export default PostMiddleware