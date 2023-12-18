import { User } from "./mongo.config.js";
import findOrCreate from "mongoose-findorcreate";

function createUser(userInfo) {
    const newUser = new User(userInfo);
    newUser.save();
}

function findAllUsers() {
    return User.find();
}



export { createUser, findAllUsers };