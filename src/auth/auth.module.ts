import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRespository } from './users.respository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRespository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
