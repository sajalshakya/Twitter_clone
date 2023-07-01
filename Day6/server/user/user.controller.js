import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserService from "./user.service.js";
import { HandleErr } from "../error/error.service.js";
import { Conflict, NotFoundError, UnauthorizedError } from "../error/error.model.js";
import { ResponseCreator } from "../util/helpers.js";

const UserController = {
    async userSignUp(req,res) {
        try{
            let hashedPassword;
            if(req.body.password){
                hashedPassword = await bcrypt.hash(req.body.password,10)
            }
            const info = {
                 fullname : req.body.fullname,
                 email: req.body.email,
                 password: hashedPassword
            }
            const user = UserService.userSignUp(info);
            return res.status(201).json(ResponseCreator(user, true,"User SignUp", 201))
        }catch(err){
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
    async userLogin(req,res){
        try{
            const {email,password} = req.body;
            const user = await UserService.getUser(email);
            if(!user){
                throw new NotFoundError();
            }
            const passwordMatch = await bcrypt.compare(password,user.password);
            if(passwordMatch) {
                const payload = {
                    userId: user.userId,
                    fullname: user.fullname, 
                    email: user.email,
                };
                const token = jwt.sign(payload, 'shhhhh')
                return res.status(200).json(ResponseCreator( token, true, "User Login", 200))
            }else{
                throw new UnauthorizedError();
            }
        }catch(err){
            const handledErr = HandleErr(err)
            return res.status(handledErr.status || 500).json(handledErr)
        }
    },
    async updateUser(res,req){
        try {
            const email = req.body.email;
            const user = await UserService.getUser(email);
            if (!user) {
                throw new NotFoundError();
            }
            const userId = parseInt(req.params.userId);
            const updatedInfo = {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
            };
            const updatedUser = UserService.updateUser(userId, updatedInfo);
            return res.status(200).json(ResponseCreator(updatedUser, true, "All Post", 200));
        } catch (err) {
            console.log(err);
            const handledErr = HandleErr(err);
            return res.status(handledErr.status || 500).json(handledErr);
        }
    }
}

export default UserController;