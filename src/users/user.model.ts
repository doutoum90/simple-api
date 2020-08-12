import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    id: String,
    password: String,
    username: String
})
export interface User {
    id?: String;
    password?: string | Int32Array;
    username?: string;
}


export interface UserModel extends User, mongoose.Document { }