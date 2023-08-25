import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export interface User extends mongoose.Document {
  id: string;
  username: string;
  password: string;
}
