import mongoose, { mongo } from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import { REACT_APP_mongoDB, REACT_APP_mongoPath } from "@env";

mongoose.connect(REACT_APP_mongoPath + REACT_APP_mongoDB, {
    useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: Number,
    birthdate: String,
    gender: String,
    orientation: String,
    hobbies: Array,
    photo: String,
    video: String,
});

userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

export { User };
