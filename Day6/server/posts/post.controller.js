import PostService from "./post.service.js"
import { HandleErr } from "../error/error.service.js";
import { Conflict, NotFoundError } from "../error/error.model.js";
import { ResponseCreator } from "../util/helpers.js";


const PostController =  {
    async getAllPosts(req,res)  {
        
        try{
            const posts = await PostService.getAllPosts();
            if(!posts){
                throw new NotFoundError();
            }
            return res.status(200).json(ResponseCreator(posts,true,"All Post",200));
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status).json(handledErr)
        }
    },
    async getPostWithComment(req,res){
        try{
            const postId = parseInt(req.params.postId);
            const post = await PostService.getPostWithComment(postId);
            if(!post){
                throw new NotFoundError();
            }
            return res.status(200).json(ResponseCreator(post,true,"Post",200))
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
    async createPost(req,res){
        try{
            const post = PostService.createPost(req.body.title,req.body.body)
            return res.status(201).json(ResponseCreator(post,true,"Created Post",201))
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
    updatePost(req,res,next) {
        try{
            const postId = parseInt(req.params.postId)
            const post = PostService.getPostWithComment(postId);
            if(!post){
                throw new NotFoundError();
            }
            const updatedPost = PostService.updatePost(postId,req.body.title,req.body.body,)
            return res.status(200).json(ResponseCreator(updatedPost,true,"Updated Post",200))
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
    deletePost(req,res,next) {
        try{o
            const postId = parseInt(req.params.postId)
               
            const deletedPost = PostService.deletePost(postId)
            return res.status(200).json(ResponseCreator(deletedPost,true,"Deleted Post",200))
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
}

export default PostController;