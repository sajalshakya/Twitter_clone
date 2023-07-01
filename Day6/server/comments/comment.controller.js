import CommentService from "./comments.service.js";
import { HandleErr } from "../error/error.service.js";
import { Conflict, NotFoundError } from "../error/error.model.js";
import { ResponseCreator } from "../util/helpers.js";
import PostService from "../posts/post.service.js";

const CommentController = {
    async getAllComments(req,res){
        try{
            const postId = parseInt(req.params.postId);
            const comments = await CommentService.getAllComments(postId);
            if(!comments){
                throw new NotFoundError();
            }
            return res.status(200).json(ResponseCreator(comments,true,"All Comments",200));
        }catch(err){
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    },
    async getComment(req,res){
        try{
            const commentId = parseInt(req.params.commentId);
            const comment = await CommentService.getComment(commentId);
            if(!comment){
                throw new NotFoundError();
            }
            return res.status(200).json(ResponseCreator(comment,true,"Comment",200));
        }catch(err){
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    },
    async createComment(req,res){
        try{
            const post = PostService.getAllPosts();
            if(!post){
                throw new NotFoundError();
            }
            const postId = parseInt(req.params.postId);
            const comment = await CommentService.createComment(req.body.body, postId);
            return res.status(200).json(ResponseCreator(comment,true,"Created Comments",201));
        }catch(err){
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    },
    async updateComment(req,res) {
        try{
            const commentId =  parseInt(req.params.commentId);
            const comment = CommentService.getComment(commentId);
            if(!comment){
                throw new NotFoundError();
            }
            const updatedComment = CommentService.updateComment(commentId,req.body.body);
            return res.status(200).json(ResponseCreator(updatedComment,true,"Updated Comments",200));
        }catch(err){
            const handledErr = handledErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    },
    async deleteComment(req,res){
        try{
            const commentId = parseInt(req.params.commentId);
            const comment =  CommentService.getComment(commentId);
            if(!comment){
                throw new NotFoundError();
            }
            const deletedComment = CommentService.deleteComment(commentId);
            return res.status(200).json(ResponseCreator(deletedComment,true,"Deleted Comment",200));
        }catch(err){
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    }
}

export default CommentController;