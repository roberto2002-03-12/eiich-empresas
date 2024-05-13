import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities';
import { CreateUserDto, CreateUserDtoLocal } from '../dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // recordatorio: lo estoy usando para encontrar user,
  // sin embargo, solamente es para verificar, si no es necesario
  // entonces solo retornar un boleano y usar count en vez de find
  async findForVerify(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['email', 'password'],
    });

    if (!user)
      throw new HttpException(`Email doesn't exists.`, HttpStatus.NOT_FOUND);

    return user;
  }

  async create(user: CreateUserDto): Promise<User> {
    const isUserNew = await this.userRepository.count({
      where: { email: user.email },
    });

    if (isUserNew === 1)
      throw new HttpException(
        'This email alredy exist.',
        HttpStatus.BAD_REQUEST,
      );

    const hashPassword = await bcrypt.hash(user.password, 10);

    const data: CreateUserDtoLocal = {
      ...user,
      password: hashPassword,
      // lo voy a dejar por defecto por el momento
      createdBy: 1,
      updatedBy: 1,
    };
    // nota: usa save para guardar, no confundir con create
    const result = await this.userRepository.save(data);

    delete result.password;

    return result;
  }
}
