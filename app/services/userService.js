const User= require('../models/user')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"sin bio")
    }

    static getInfo(User){
        return [User.id,User.username,User.name,"Sin bio"]
    }

    static updateUserName(user,newUserName){
        return user.username = newUserName;
    }

    static getAllUsersnames(array){
        return array.map(function(user) {
            return user.username;
        });
        
    }
}


module.exports = UserService