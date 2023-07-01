import db from '../config/sequelize.js';

const User = db.users

const UserService = {
    async userSignUp(info) {
          const signUp = await User.create(info)
          return signUp;
    },
    async getUser(email) {
          const user = await User.findOne({where: { email } });
          return user; 
    },
    async updateUser(userId, updatedInfo){
          const user = await User.findByIdAndUpdate(userId, updatedInfo, { new: true });
          return user
    },

}
export default UserService;