import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(username: string, password: string,email:string): Promise<User> {
    const user = new this.userModel({ username, password,email });
    return await user.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username }).exec();
  }
}
