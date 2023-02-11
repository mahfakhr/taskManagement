import { Injectable } from '@nestjs/common';
import { UsersRespository } from './users.respository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRespository)
    private usersRepository: UsersRespository,
  ) {}
}
