import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.phone = createUserDto.phone;
    await newUser.save();
    return this.findOne(newUser.id);
  }

  findOne(id: string) {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }
}
