import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './user.model'; // Import the UserSchema here

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Register UserSchema with MongooseModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
