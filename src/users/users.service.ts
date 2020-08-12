import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('users') private readonly userModel: Model<UserModel>) { }

    async connexion(username: string, password: string) {
        const user = await this.userModel.findOne({ username, password });
        return user;
    }
    async getUserByUsername(username: string) {
        const users = await this.userModel.find({ username });
        return users;
    }

    async createUser(user) {
        const userModel = new this.userModel({
            username: user.username,
            password: user.password
        })

        const createdUser = await userModel.save();
        return createdUser;
    }

    async changerMotPasse(id: string, user) {
        const etudiantmodifie = await this.userModel.findByIdAndUpdate(id, user);
        return etudiantmodifie;
    }

}
